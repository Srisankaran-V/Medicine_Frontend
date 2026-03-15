import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CircularProgress,
  Alert
} from "@mui/material";

import InventoryStats from "../components/pharmacy/InventoryStats";
import InventoryToolbar from "../components/pharmacy/InventoryToolbar";
import InventoryTable from "../components/pharmacy/InventoryTable";

import { fetchDrugs } from "../api/pharmacyApi";
import { mockDrugs } from "../mock/drugMockData";

export default function InventoryPage() {

  const [drugs, setDrugs] = useState([]);
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    async function loadDrugs() {
      try {
        const data = await fetchDrugs();

        if (!data || data.length === 0) {
          setDrugs(mockDrugs);
        } else {
          setDrugs(data);
        }

      } catch (err) {
        console.error(err);
        setDrugs(mockDrugs);
        setError("Backend unavailable. Showing demo data.");
      } finally {
        setLoading(false);
      }
    }

    loadDrugs();

  }, []);

  const filteredDrugs = drugs.filter((drug) =>
    drug?.name?.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <Box>

      {/* PAGE HEADER */}
      <Box mb={3}>
        <Typography
          variant="h5"
          fontWeight={700}
          sx={{ fontSize: { xs: 20, sm: 26 } }}
        >
          Stock Management
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Monitor and manage pharmaceutical stock levels.
        </Typography>
      </Box>

      {/* STATS */}
      <InventoryStats drugs={drugs} />

      {/* TABLE SECTION */}
      <Card sx={{ borderRadius: 3 }}>
        <CardContent>

          <InventoryToolbar
            search={search}
            setSearch={setSearch}
            onCreateDrug={() => console.log("Open Create Drug Modal")}
          />

          <Typography variant="body2" mb={2}>
            Total entries: {filteredDrugs.length}
          </Typography>

          {loading && (
            <Box display="flex" justifyContent="center" py={4}>
              <CircularProgress />
            </Box>
          )}

          {error && (
            <Alert severity="warning" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          {!loading && (
            <InventoryTable drugs={filteredDrugs} />
          )}

        </CardContent>
      </Card>

    </Box>
  );
}