import React from "react";
import { Typography, TableBody, CardContent } from "@material-ui/core";
import { ReportCard, ReportTable } from "./components";
import { Row } from "./Row";

export const Comments = ({comments}) => {
  if(!comments || comments.length === 0) {
    return null;
  }

  return (
    <ReportCard>
      <CardContent>
        <Typography variant="h6">Comentarios</Typography>

        {comments.map(entry => (
          <ReportTable size="small" key={entry.email}>
            <TableBody>
              <Row name="Nombre" value={entry.name} footer />
              <Row name="Email" value={entry.email} footer />
              <Row name="Rating" value={entry.rating} footer />
              <Row value={entry.comments} footer />
            </TableBody>
          </ReportTable>
        ))}
      </CardContent>
    </ReportCard>
  ) 
}

