import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
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

  return (
    <Card sx={{ m: 1 }}>
      <CardContent>
        <Typography variant="h4">{friendGroup.name}</Typography>
        {Object.values(friendGroup.members).map((m) => (
          <FriendGroupMember
            key={m.userID}
            member={m}
            friendGroupID={friendGroup.id}
          />
        ))}
        {!showForm ? <Button onClick={handleToggleForm}>Invite</Button> : null}
        {showForm ? (
          <FriendGroupInvitationForm
            friendGroupID={friendGroup.id}
            handleToggleForm={handleToggleForm}
            toggleIsToastOpen={toggleIsToastOpen}
          />
        ) : null}
      </CardContent>
      <CardActions>
        <Typography variant="body2">See Recommendations</Typography>
        <Button
          key="movies"
          component={RouterLink}
          to={`/friendGroups/${friendGroup.id}/movies`}
        >
          Movies
        </Button>
        <Button
          key="tv"
          component={RouterLink}
          to={`/friendGroups/${friendGroup.id}/tv`}
        >
          TV
        </Button>
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
