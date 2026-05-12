
import React from 'react';
import TableBeritaPage from './containers/TableBeritaPage'
import TambahBeritaPage from './containers/TambahBeritaPage'
import DetailBeritaPage from './containers/DetailBeritaPage'

const beritaBoardRoutes = [
{ 
    path: "/berita",
    element: <TableBeritaPage />,
  }	
,
{ 
    path: "/berita/tambah",
    element: <TambahBeritaPage />,
  }	
,
{ 
    path: "/berita/:id_berita",
    element: <DetailBeritaPage />,
  }	

]

export default beritaBoardRoutes
