import axios from "axios";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { WTWWF_API_URL } from "../utilities/config";

function Invitation() {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();
  const invitationID = query.get("id");

  const [invitation, setInvitation] = useState({});
  const { user } = useSelector((store) => store);

  useEffect(() => {
    async function getInvitation() {
      const invitationResponse = await axios.get(
        `${WTWWF_API_URL}/invitations`,
        {
          params: {
            id: invitationID,
          },
        }
      );
      setInvitation({ ...invitationResponse.data });
    }
    getInvitation();
  }, [invitation, invitationID]);

  const history = useHistory();

  const handleInvitation = async (response) => {
    let redirectURL = "";
    if (response === "decline") {
      const response = await axios.post(
        `${WTWWF_API_URL}/invitations/decline`,
        {
          id: invitationID,
        }
      );
      redirectURL = "/";
    } else if (response === "accept") {
      const response = await axios.post(`${WTWWF_API_URL}/invitations/accept`, {
        id: invitationID,
        userID: user.id,
      });
      redirectURL = "/friendGroups";
    }
    history.push(redirectURL);
  };

  return Object.keys(invitation).length > 0 ? (
    <Box>
      <Typography>{`${invitation.invitingUser.username} has invited you to join the group: ${invitation.friendGroup.name}`}</Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ m: 2 }}
        onClick={() => handleInvitation("accept")}
      >
        Accept
      </Button>
      <Button
        variant="contained"
        color="error"
        sx={{ m: 2 }}
        onClick={() => handleInvitation("decline")}
      >
        Decline
      </Button>
    </Box>
  ) : null;
}

export default Invitation;
