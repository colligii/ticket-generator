import Input from "./components/Input";

const App = () => {
  return (
    <main className="h-full flex justify-center items-center">
      <div className="max-w-md px-20">
        <div className="text-xl font-bold">
          <h1>Digite os dados do funcionario:</h1>
        </div>
        <div>
          <form
            className="pt-2"
          >
            <Input
              id="name_emp"
              text="Nome do funcionario"
            />
            <Input
              id="name_emp"
              text="Nome do funcionario"
            />
          </form>
        </div>
      </div>
    </main>
  );
}

export default App;