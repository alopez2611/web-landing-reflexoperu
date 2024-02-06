import Layout from "../../components/Layout.tsx";
import Title from "../../components/Title.tsx";
import Main from "../../components/location/Main.tsx";
import TopsCards from "../../components/TopCards.tsx";

export default function Contact() {
  const title = "Sedes";
  const breadcrumb = {
    enable: true,
    link: "/",
    text1: "Inicio",
    text2: title,
  };

  return (
    <Layout title={title}>
      <TopsCards />
      <Title name="Sedes" breadcrumb={breadcrumb} />
      <Main />
    </Layout>
  );
}
