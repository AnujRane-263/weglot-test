import { Footer, Header } from "@components/common";
import { AppConstant } from "constant/AppConstant";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";

const Collections: NextPage = () => {
  return (
    <Layout className="page-home">
      <Head>
        <title>{AppConstant.meta.title}</title>
        <meta name="description" content={AppConstant.meta.description} />
      </Head>
  <div className="content">
  <h1>Parliament Session 2024, 18th Lok Sabha Live</h1>
    <p>The first day of the 18th Lok Sabha began on a stormy note amid a war of words between Prime Minister Narendra Modi and Congress chief Mallikarjun Kharge over the imposition of Emergency in 1975 and strident appeals to protect democracy. As the opening session saw a total of 262 newly-elected MPs, including the prime minister, taking oath, the opposition staged a protest march inside Parliament complex, with MPs of the INDIA bloc raising slogans on “saving democracy” and displaying copies of the Constitution.</p>
    <p>The session commenced under the shadow of the medical exam NEET controversy and cancellation of UGC-NET exam, the recent terror attacks in Kashmir, West Bengal train accident, and the Tamil Nadu hooch tragedy. A rejuvenated opposition is set to corner the government on these issues, besides focussing on unemployment, price rise and economic disparities, during the short session.</p>
    <p>The remaining new MPs will take oath on Tuesday, while the election for the post of Speaker is scheduled for Wednesday.</p>

    <h2>{`NDA leaders slam opposition MPs for 'save Constitution' march to Lok Sabha`}</h2>
    <p>{`The NDA leaders criticised the opposition MPs for taking out "save Constitution" march to Lok Sabha, saying they should now consider how to take the country on the path of progress ending political matters as the elections are over.`}</p>
    <p>{`"It was not right to do such politics, make such comments and create such an atmosphere on a day when everyone (newly elected MPs) would like to take oath in a good atmosphere," TDP MP and Union minister Kinjarapu Ram Mohan Naidu told PTI when asked to comment.`}</p>
    <p>{`BJP MP and former Karnataka chief minister Basavaraj Bommai hit out at the Congress over the INDIA bloc's "save Constitution" march and said it was the Congress government which had "murdered" the democracy and the Constitution by imposing Emergency on June 25, 1975.`}</p>
    <p>{`Union minister and JD(U) MP Rajiv Ranjan Singh also hit out at the opposition parties for their "save Constitution" march, asking, "What is the threat to the Constitution?" "They believe that the government should interfere with the actions being taken by the constitutional authorities and if the government doesn't do so, then the Constitution comes under threat," Singh told PTI, when asked for a comment.`}</p>  </div>
    </Layout>
  );
};

export default Collections;
