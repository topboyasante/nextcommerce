import Layout from '@/layout/Layout'
import '@/styles/globals.css'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  return (
    <AnimatePresence mode='wait'>
         <motion.div
         key={router.route}
         initial ='initialState'
         animate ='animateState'
         exit= 'exitState'
         transition={{
          duration:0.75
         }}
         variants={
          {
            initialState:{
              opacity:0,
            },
            animateState:{
              opacity:1,
            },
            exitState:{

            },
          }
         }
         >
            <Layout>
              <Component {...pageProps} />
            </Layout>
         </motion.div>
    </AnimatePresence>
  )
}
