import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

 
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm Muhammad Imran, a passionate Next.js developer and a fresher aiming to grow as a Full Stack Developer. I’ve learned modern web technologies like React, Next.js, JavaScript, Tailwind CSS, and I'm currently exploring backend tools like Node.js and MongoDB. I'm eager to apply my skills in real-world projects and contribute to impactful development teams.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
     
    </Layout>
  );
}