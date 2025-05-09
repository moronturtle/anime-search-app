import {
  Box,
  Pagination,
  Select,
  MenuItem,
  Typography,
  Paper,
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";

type PaginationControlProps = {
  page: number;
  limit: number;
  total: number;
  pageCount: number;
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  onLimitChange: (e: SelectChangeEvent) => void;
};

const LIMIT_PER_PAGE: number[] = [5, 10, 15, 25];

const CustomPagination = ({
  page,
  limit,
  total,
  pageCount,
  onPageChange,
  onLimitChange,
}: PaginationControlProps) => {
  const start = (page - 1) * limit + 1;
  const end = Math.min(page * limit, total);

  return (
    <Paper
      sx={{
        mt: 6,
        px: 3,
        py: 2,
        display: "flex",
        flexWrap: "wrap",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 2,
        boxShadow: 3,
        gap: 2,
      }}
    >
      <Typography variant="body2" fontWeight="medium">
        {`Showing ${start}–${end} of ${total} results`}
      </Typography>

      <Box
        display="flex"
        alignItems="center"
        gap={2}
        flexWrap="wrap"
        justifyContent={{ xs: "center", sm: "flex-end" }}
      >
        <Pagination
          count={pageCount}
          page={page}
          onChange={onPageChange}
          color="primary"
          shape="rounded"
          siblingCount={0}
          boundaryCount={1}
        />
        <Select
          sx={{ minWidth: 80 }}
          size="small"
          value={limit.toString()}
          onChange={onLimitChange}
        >
          {LIMIT_PER_PAGE.map((val) => (
            <MenuItem key={val} value={val.toString()}>
              {val}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </Paper>
  );
};

export default CustomPagination;
