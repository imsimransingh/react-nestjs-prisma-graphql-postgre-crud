// src/components/ShortUrls.tsx
import React,  { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper, 
} from "@material-ui/core"; 
import ShortUrlForm from '../forms/shortUrlFormComponent';
import {ShortUrlInterface} from "../../interfaces/shortUrl.interface";
import "./TableStyle.css";
 

const GET_SHORT_URLS = gql`{ shortUrls { id shortUrl fullUrl createdAt updatedAt} } `;

const ShortUrls: React.FC = () => {

  const [urls, setUrls] = useState<ShortUrlInterface[]>([]);

  const addUrl = (newUrl:ShortUrlInterface) => {
    setUrls([...urls, newUrl]);
  };

  const { loading, error, data } = useQuery(GET_SHORT_URLS);
 
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(  </p>;

  return (
    <>
    <ShortUrlForm addUrl={addUrl} />
    <TableContainer component={Paper} className="tableContainer">
 
    <Table className="overdueTable" aria-label="short url table">
      <TableHead className="tableHeader">
        <TableRow>
          <TableCell className="tableRowHeader">ID</TableCell>
          <TableCell className="tableRowHeader">Original URL</TableCell>
          <TableCell className="tableRowHeader">Short String </TableCell>
          <TableCell className="tableRowHeader">Created On</TableCell>
          <TableCell className="tableRowHeader">Updated On</TableCell>
          <TableCell className="tableRowHeader">Visit Short Link</TableCell>
        </TableRow>
      </TableHead>
      <TableBody className="tableBody">
        {data.shortUrls.map((urls : any) => (
          <TableRow key={urls.id}>
            <TableCell>{urls.id}</TableCell>
            <TableCell>{urls.fullUrl}</TableCell>
            <TableCell>{urls.shortUrl}</TableCell>
            <TableCell>{urls.createdAt}</TableCell>
            <TableCell>{urls.updatedAt}</TableCell>
            <TableCell>
              <a href={urls.shortUrl} target="_blank" rel="noopener noreferrer">Visit</a>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
 </>
  );
};

export default ShortUrls;
