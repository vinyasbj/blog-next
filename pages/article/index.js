import React from 'react';
import Head from 'next/head';
import Navbar from '../components/navbar';
// import "/home/vinyas/MERN/blog-next/styles.scss"
class Article extends React.Component {
    render(){
        return (
        <div>
            <Navbar/>
            <h1>Hello Article!</h1>
        </div>
        )
    }
}
export default Article;