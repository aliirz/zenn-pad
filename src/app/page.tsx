"use client";

import Head from 'next/head';
import { useState } from 'react';
import { marked } from 'marked';
import styles from "./page.module.css";

export default function Home() {
  const [markdown, setMarkdown] = useState(''); // State to hold our markdown input

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMarkdown(event.target.value); // Update the state
  };

  return (
    
    <div className={styles.container}>
      <Head>
        <title>Ali's Zen Markdown Editor</title>
      </Head>

      <textarea
        value={markdown}
        onChange={handleChange}
        className={styles.editor}
        placeholder="Type your markdown here..."
      />
      <div
        className={styles.preview}
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />
    </div>
  );
}
