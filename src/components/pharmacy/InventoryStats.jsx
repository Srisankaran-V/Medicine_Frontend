import { Grid, Card, CardContent, Typography } from "@mui/material";

export default function InventoryStats({ drugs }) {

  const total = drugs.length;

  const lowStock = drugs.filter(
    d => d.quantityInStock < d.minStockLevel
  ).length;

  const expiringSoon = drugs.filter(d => {
    const expiry = new Date(d.expiryDate);
    const today = new Date();
    const diff = (expiry - today) / (1000 * 60 * 60 * 24);
    return diff < 60;
  }).length;

  const stats = [
    { label: "Total Drugs", value: total },
    { label: "Low Stock Alerts", value: lowStock },
    { label: "Expiring Soon", value: expiringSoon }
  ];

  return (
    <Grid container spacing={2} mb={3}>
      {stats.map((s, i) => (
        <Grid item xs={12} md={4} key={i}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>

              <Typography
                variant="body2"
                color="text.secondary"
              >
                {s.label}
              </Typography>

              <Typography
                variant="h5"
                fontWeight={700}
                sx={{ fontSize: { xs: 20, sm: 24 } }}
              >
                {s.value}
              </Typography>

            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}