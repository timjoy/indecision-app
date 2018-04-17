console.log('app.js is running');

const app = {
  title: 'Indecision App',
  subtitle: 'An app you can use',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  
  const option = e.target.elements.option.value;

  if (option){
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  };
};
const removeAll = (e) => {
  app.options = [];
  render();
};
const onMakeDecision = () =>{
  const randNum =Math.floor(Math.random() * app.options.length);
  const option = app.options[randNum];
  alert(option);
};


const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
        
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "no options"}</p>
      
      <button disabled={app.options.length === 0}onClick={onMakeDecision}>What should I do?</button>
      <button onClick={removeAll}>Remove All</button>
      <ol>
      {
      app.options.map((option)=>{
         return <li key={option}>{option}</li>
      }) 
      }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option' />
        <button>Add Option</button>
      </form>
  
    </div>
  );
  ReactDOM.render(template, appRoot);
};
render();
