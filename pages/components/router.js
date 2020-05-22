import React from 'react';
import Link from 'next/link';

const Router = () => (
    <div>
      <li> <Link href="/"> HOME </Link> </li>
      <li> <Link href="/movies"> MOVIES</Link> </li>
      <li> <Link href="/tech">TECH</Link> </li>
      <li> <Link href="/sports">SPORTS</Link> </li>
      <li><Link href="/article"><a>Article</a></Link> </li>
    </div>
);


export default Router;
