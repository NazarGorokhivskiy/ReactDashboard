import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import data from "../../data/support-requests.json";
import { styled } from "@mui/material/styles";
import ThemeColors from "../../theme/colors";
import Chip from "@mui/material/Chip";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: ThemeColors.GRAY_100,
  },
}));

const StatusCell = ({ status }: { status: string }) => {
  const bgColor =
    {
      sent: "success",
      pending: "warning",
      declined: "error",
    }[status] || "info";

  return (
    <Chip
      label={status}
      color={bgColor as any}
      sx={{ textTransform: "capitalize", borderRadius: 2 }}
    />
  );
};

export default function SupportRequestsTable() {
  return (
    <Paper>
      <Box p={2}>
        <Typography variant="h5">
          Support{" "}
          <Typography variant="h5" component="span" fontWeight={700}>
            Requests
          </Typography>
        </Typography>
        <Box mt={2} width="100%" overflow="auto">
          <Table sx={{ minWidth: 700 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Product</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>City</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <StyledTableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.product}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.city}</TableCell>
                  <TableCell>
                    <StatusCell status={row.status} />
                  </TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </Paper>
  );
}
