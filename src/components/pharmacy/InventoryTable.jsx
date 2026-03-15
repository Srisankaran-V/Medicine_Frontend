import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  TableContainer,
  Paper
} from "@mui/material";

export default function InventoryTable({ drugs }) {

  return (
    <TableContainer
      component={Paper}
      sx={{
        overflowX: "auto",
        borderRadius: 2
      }}
    >
      <Table
        size="small"
        sx={{ minWidth: 750 }}
      >

        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Generic</TableCell>
            <TableCell>Code</TableCell>
            <TableCell>Classification</TableCell>
            <TableCell>Form</TableCell>
            <TableCell>Stock</TableCell>
            <TableCell>Expiry</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>

          {drugs.map((drug) => (

            <TableRow key={drug.id} hover>

              <TableCell sx={{ whiteSpace: "nowrap" }}>
                {drug.name}
              </TableCell>

              <TableCell sx={{ whiteSpace: "nowrap" }}>
                {drug.genericName}
              </TableCell>

              <TableCell>
                {drug.drugCode}
              </TableCell>

              <TableCell>
                {drug.drugClassification}
              </TableCell>

              <TableCell>
                {drug.drugForm}
              </TableCell>

              <TableCell>
                {drug.quantityInStock}
              </TableCell>

              <TableCell>
                {new Date(drug.expiryDate).toLocaleDateString()}
              </TableCell>

              <TableCell>
                ₹{drug.sellingPrice}
              </TableCell>

              <TableCell>
                <Chip
                  label={drug.drugStatus}
                  size="small"
                  color={
                    drug.drugStatus === "ACTIVE"
                      ? "success"
                      : "default"
                  }
                />
              </TableCell>

            </TableRow>

          ))}

        </TableBody>

      </Table>
    </TableContainer>
  );
}