import Head from 'next/head'
import React from 'react'
import { client } from '../../../SanityClient'

function index({product}) {
  return (
    <>
        <Head>
            <title>Product</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <link href="https://api.fontshare.com/v2/css?f[]=clash-display@400,700,500,600,300&display=swap" rel="stylesheet"></link>
        </Head>
        <main className='pt-[15vh]'>
            <p>{product.name}</p>
        </main>
    </>
  )
}

export default index

export async function getStaticPaths(){
    const query = `*[_type == "product"]
    {
      slug{
        current
      }
    }`
    const product = await client.fetch(query)
  
    const paths = product.map((item)=>({
      params:{
        slug:item.slug.current
      }
    }))
  
    return{
      paths,
      fallback:'blocking'
    }
}

export async function  getStaticProps({params:{slug}}){
    const query = `*[_type == "product"  && slug.current == '${slug}'][0]`
    const product = await client.fetch(query)
    return{
      props:{
        product
      }
    }
  }