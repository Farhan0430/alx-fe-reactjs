import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8">
      <RegistrationForm />

      <FormikForm />
    </div>
  );
}

export default App;
