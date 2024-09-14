import { MoreHoriz } from "@mui/icons-material";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { useState } from "react";

function Contacts({ contacts }) {
  const [showMoreContacts, setShowMoreContacts] = useState(false);

  return (
    <Stack>
      <Typography
        sx={{ fontWeight: "700", fontSize: "14px", marginBottom: "10px" }}
      >
        Contacts
      </Typography>
      <Stack direction="row" flexWrap="wrap">
        {contacts
          .slice(0, showMoreContacts ? contacts.length : 11)
          .map((contact) => (
            <Box
              key={contact.id}
              padding="0 9px 9px 0"
              onClick={() => setShowMoreContacts(false)}
            >
              <Avatar
                key={contact.id}
                src={contact.avatar}
                alt={contact.name}
                sx={{
                  height: "35px",
                  width: "35px",
                  border: "2px solid",
                  borderColor: contact.online ? "success.main" : "grey.A6f",
                }}
              />
            </Box>
          ))}
        {!showMoreContacts && (
          <Box
            sx={{
              fontWeight: "400",
              fontSize: "14px",
              color: "grey.A6f",
              marginTop: "6px",
              marginLeft: "5px",
              cursor: "pointer",
            }}
            onClick={() => setShowMoreContacts(true)}
          >
            <MoreHoriz />
          </Box>
        )}
      </Stack>
    </Stack>
  );
}

export default Contacts;
