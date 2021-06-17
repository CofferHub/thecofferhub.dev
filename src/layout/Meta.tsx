import React from 'react';

import { NextSeo } from 'next-seo';
import Head from 'next/head';

import { Config } from '../utils/Config';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

console.log('>>>', `${Config.publicUrl}/favicon-32x32.png`);

const Meta = (props: IMetaProps) => (
  <>
    <Head>
      <meta charSet="UTF-8" key="charset" />
      <meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" />
      {/* <link
        rel="apple-touch-icon"
        href={`${process.env.publicUrl}/apple-touch-icon.png`}
        key="apple"
      /> */}
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${Config.publicUrl}/favicon-32x32.png`}
        key="icon32"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${Config.publicUrl}/favicon-16x16.png`}
        key="icon16"
      />

      <img src={`${Config.publicUrl}/favicon-32x32.png`} alt="" />

      <link rel="icon" href={`${Config.publicUrl}/favicon.ico`} key="favicon" />
    </Head>
    <NextSeo
      title={props.title}
      description={props.description}
      canonical={props.canonical}
      openGraph={{
        title: props.title,
        description: props.description,
        url: props.canonical,
        locale: Config.locale,
        site_name: Config.site_name,
      }}
    />
  </>
);

export { Meta };
