import { useSessions } from "../../hooks/useSessions";
import { Box, List, ListItem, Typography } from "@mui/material";
import { formatDateOnly } from "../../utils/util";

export const SessionList = () => {
  const { data, loading, error } = useSessions();

  function getScoreMessage(focus_score: number) {
    if (focus_score > 10 || focus_score < 0) {
      return "WOW you didnt even have a focus score?";
    } else if (focus_score > 0 && focus_score < 3) {
      return "You are not even focused bro";
    } else if (focus_score > 3 && focus_score < 6) {
      return "You are on the right path, FOCUS UP!!!";
    } else if (focus_score > 6 && focus_score < 9) {
      return "You are Learning the right way, congrats";
    } else if (focus_score == 10) {
      return "Trully a god amoung men, NASA should study your focus";
    }
  }

  return (
    <>
      {loading && <p>Loading your Page</p>}
      {error && <p>{error}</p>}

      <List>
        {data &&
          data.map((item) => {
            return (
              <ListItem
                key={item.id}
                sx={{
                  backgroundColor: "grey.900",
                  border: "1px solid",
                  borderColor: "grey.700",
                  boxShadow: 2,
                  padding: "25px",
                  marginBottom: "10px",
                  borderRadius: "8px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{ textAlign: "center", width: "100%" }}
                    >
                      {item.project_name}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 0.5,
                      marginTop: 5,
                    }}
                  >
                    <Typography>Studied {item.topic}</Typography>
                    <Typography>for {item.duration_minutes} Minutes</Typography>
                    <Typography>on {formatDateOnly(item.date)}</Typography>
                  </Box>

                  <Box sx={{ marginTop: 1 }}>
                    <Typography>
                      You gave yourself a Focus score of {item.focus_score}!
                    </Typography>
                    <Typography sx={{ marginTop: "10px" }}>
                      <strong>
                        {item.focus_score && getScoreMessage(item.focus_score)}
                      </strong>
                    </Typography>
                  </Box>
                </Box>
              </ListItem>
            );
          })}
      </List>
    </>
  );
};
