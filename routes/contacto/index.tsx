import Layout from "../../components/Layout.tsx";
import Title from "../../components/Title.tsx";
import Main from "../../components/contact/Main.tsx";
import Form from "../../components/contact/Form.tsx";
import TopsCards from "../../components/TopCards.tsx";

export default function Contact() {
  const breadcrumb = {
    enable: false,
  };

  const title = "Contacto";

  return (
    <Layout title={title}>
      <TopsCards />
      <Title name="Contáctanos" breadcrumb={breadcrumb} />
      <Main />
      <Form />
    </Layout>
  );
}
