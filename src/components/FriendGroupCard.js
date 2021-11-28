import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Snackbar,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FriendGroupMember from "./FriendGroupMember";
import FriendGroupInvitationForm from "./FriendGroupInvitationForm";
import useToggle from "../customHooks/useToggle";

function FriendGroupCard({ friendGroup }) {
  const [showForm, toggleShowForm] = useToggle(false);
  const handleToggleForm = (evt) => {
    toggleShowForm();
  };

  const [isToastOpen, toggleIsToastOpen] = useToggle(false);

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={toggleIsToastOpen}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const INITIAL_NUMBER_OF_MEMBERS_TO_DISPLAY = 2;

  const [numberOfMembersToDisplay, setNumberOfMembersToDisplay] = useState(
    INITIAL_NUMBER_OF_MEMBERS_TO_DISPLAY
  );
  const [isSeeAllMembers, setIsSeeAllMembers] = useToggle(false);

  useEffect(() => {
    if (isSeeAllMembers) {
      setNumberOfMembersToDisplay(Object.values(friendGroup.members).length);
    } else {
      setNumberOfMembersToDisplay(INITIAL_NUMBER_OF_MEMBERS_TO_DISPLAY);
    }
  }, [numberOfMembersToDisplay, isSeeAllMembers, friendGroup.members]);

  const handleSeeAllMembersClick = (evt) => {
    setIsSeeAllMembers(isSeeAllMembers ? false : true);
  };

  return (
    <Card sx={{ mr: 2, my: 1, minWidth: 350, maxWidth: 350 }}>
      <CardContent sx={{ paddingBottom: 0 }}>
        <Typography variant="h5">{friendGroup.name}</Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          {Object.values(friendGroup.members).map((m, i) =>
            i < numberOfMembersToDisplay ? (
              <FriendGroupMember
                key={m.userID}
                member={m}
                friendGroupID={friendGroup.id}
              />
            ) : null
          )}
          {Object.values(friendGroup.members).length >
          INITIAL_NUMBER_OF_MEMBERS_TO_DISPLAY ? (
            isSeeAllMembers ? (
              <Button onClick={handleSeeAllMembersClick}>See Less</Button>
            ) : (
              <Button onClick={handleSeeAllMembersClick}>See All</Button>
            )
          ) : null}
          {!showForm ? (
            <Button onClick={handleToggleForm}>Invite</Button>
          ) : null}
          {showForm ? (
            <FriendGroupInvitationForm
              friendGroupID={friendGroup.id}
              handleToggleForm={handleToggleForm}
              toggleIsToastOpen={toggleIsToastOpen}
            />
          ) : null}
        </Box>
      </CardContent>
      <CardActions sx={{ mx: 1 }}>
        <Typography sx={{ gridRow: 1, gridColumn: "1/3" }} variant="body2">
          Recommendations:
        </Typography>
        <Box sx={{ display: "grid", gap: 1 }}>
          <Button
            sx={{ gridRow: 1, gridColumn: "3/4" }}
            component={RouterLink}
            key="movies"
            size="small"
            to={`/friendGroups/${friendGroup.id}/movies`}
            variant="outlined"
          >
            Movies
          </Button>
          <Button
            sx={{ gridRow: 1, gridColumn: "4/5" }}
            component={RouterLink}
            key="tv"
            size="small"
            to={`/friendGroups/${friendGroup.id}/tv`}
            variant="outlined"
          >
            TV
          </Button>
        </Box>
      </CardActions>
      <Snackbar
        open={isToastOpen}
        autoHideDuration={6000}
        onClose={toggleIsToastOpen}
        message="Invitation Sent"
        action={action}
      />
    </Card>
  );
}

export default FriendGroupCard;
