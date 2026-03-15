import { Box, TextField, Button } from "@mui/material";

export default function InventoryToolbar({
  search,
  setSearch,
  onCreateDrug
}) {

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: 2,
        justifyContent: "space-between",
        alignItems: { sm: "center" },
        mb: 2
      }}
    >

      <TextField
        fullWidth
        size="small"
        placeholder="Search drug..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Button
        variant="contained"
        sx={{ whiteSpace: "nowrap" }}
        onClick={onCreateDrug}
      >
        Create Drug
      </Button>

    </Box>
  );
}