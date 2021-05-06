import Head from "next/head";

import { useAuth } from "../contexts/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <h1>Dashboard: {user?.email}</h1>
    </>
  );
}
