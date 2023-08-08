import books from './../Studies'
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const Book = () => {
    const { bookSlug } = useParams();
  
    useEffect(() => {
      const foundBook = books.find((book) => book.slug === bookSlug);
      const currentBook = foundBook;
      console.log(foundBook);
    }, [bookSlug])

    return (
        <p></p>
    )
}  
export default Book