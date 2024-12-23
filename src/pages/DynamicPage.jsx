import React from 'react';
import { useParams } from 'react-router-dom';

function DynamicPage() {
  const { id } = useParams();
  return <h2>Page Dynamique : {id}</h2>;
}

export default DynamicPage;
