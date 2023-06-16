'use client'
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import '../app/globals.css';

export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.js");
  }, [])

  return (
    <html lang="en">
      <body className="container-fluid p-5">{children}</body>
    </html>
  )
}
