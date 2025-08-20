import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8">
      {/* First, the manual controlled form */}
      <RegistrationForm />

      {/* Then, the Formik + Yup form */}
      <FormikForm />
    </div>
  );
}

export default App;
