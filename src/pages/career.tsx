import React from "react";
import Layout from "../components/layout/Layout";
import CommonService from "@/components/Common/Service/common_service";
import Link from "next/link";

function career() {
  return (
    <Layout>
      <Link href="/">career</Link>
      <CommonService
        header={"What Pluto Do"}
        description={
          "We are proud to work with truly innovative clients and the products we truly believe in. Here are just a few of the projects we’ve had the privilege to work with."
        }
      />
    </Layout>
  );
}

export default career;
