const projects = [
  {
    "name": "Nifty Wozniak",
    "kind": "Kind X",
    "year": "2020",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eleifend purus nec commodo semper. Phasellus eget lacinia ex. Mauris ultrices dui eros, in auctor nunc venenatis tristique. Phasellus gravida diam nunc, vel lacinia magna ultricies sit amet. Sed lacus dui, egestas lacinia efficitur in, cursus vel libero. Suspendisse luctus, tellus sed consectetur dignissim, libero est tincidunt orci, id tristique tortor dui sit amet leo. Vivamus sed ante vel lorem congue euismod. Cras commodo et lacus eget finibus. Proin gravida ultricies malesuada. Nulla aliquam vehicula leo non pulvinar."
  },
  {
    "name": "Flamboyant Herschel",
    "kind": "Kind Y",
    "year": "2020",
    "description": "Quisque imperdiet purus id nunc congue varius. Suspendisse non arcu sapien. Cras vitae mauris vel quam volutpat eleifend. Vivamus ac est sed erat cursus interdum a vel nisi. Morbi sit amet pellentesque lectus. Fusce laoreet sapien vel bibendum tempor. Vivamus aliquam hendrerit metus, a vehicula lacus dignissim vel."
  },
  {
    "name": "Sleepy Visvesvaraya",
    "kind": "Kind Z",
    "year": "2020",
    "description": "Proin maximus lacus eros, et tincidunt ante scelerisque et. Cras a ornare magna. Nullam quis gravida turpis. Curabitur et tellus eu quam vulputate vulputate. Nunc scelerisque efficitur consequat. Pellentesque ac urna diam. Aenean vel mattis mauris, ut eleifend neque. In sit amet orci eu urna vulputate suscipit nec non ante. Curabitur malesuada tincidunt magna, ut pharetra lacus. Donec non aliquam dui. Sed a nibh sagittis, sollicitudin leo et, ullamcorper mi. Nunc volutpat metus nisi, in imperdiet massa volutpat non."
  },
  {
    "name": "Elastic McNulty",
    "kind": "Kind X",
    "year": "2021",
    "description": "Nullam mauris sem, venenatis ac dui eget, dignissim consequat justo. Pellentesque nec nisl efficitur, ornare ipsum at, pharetra mi. Aliquam a faucibus tortor, in condimentum quam. Suspendisse sit amet lorem egestas sapien pellentesque varius lobortis ac risus. Mauris ut efficitur nunc, in dignissim turpis. Fusce eget lorem in lacus dignissim aliquam at et nibh. In in ante suscipit leo tristique semper. Curabitur at augue congue, iaculis ante sed, tristique ex. Cras sollicitudin nibh a mauris venenatis facilisis. Duis a malesuada purus. In hac habitasse platea dictumst. Suspendisse bibendum mauris non quam accumsan, a finibus metus auctor. Quisque libero purus, imperdiet vel pretium a, sollicitudin at ligula."
  },
  {
    "name": "Awesome Villani",
    "kind": "Kind Y",
    "year": "2021",
    "description": "Morbi et elementum tellus, eu vehicula nulla. Duis congue, arcu et finibus condimentum, nisi ex facilisis lorem, eu tempus arcu dolor nec enim. Pellentesque dignissim sodales nibh mattis commodo. Curabitur blandit feugiat blandit. Aenean lobortis nulla felis, vitae blandit turpis facilisis vel. Vivamus ipsum augue, posuere id dapibus ut, iaculis at nulla. Mauris at aliquet ex. Aliquam vel sollicitudin velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin eu lacinia dolor. Nam in venenatis nibh."
  },
  {
    "name": "Peaceful Black",
    "kind": "Kind Z",
    "year": "2021",
    "description": "Ut varius risus lectus, vel venenatis nulla facilisis non. Curabitur mollis libero quis lectus commodo tempus. Vestibulum elementum velit non mauris dictum, eget commodo eros iaculis. Phasellus ac purus quis nulla faucibus tincidunt quis eu sem. Etiam sed eros et velit posuere pharetra. Etiam non blandit urna. Cras risus mi, condimentum eu odio eu, elementum molestie ligula. Suspendisse magna neque, mollis vel fringilla eu, vehicula nec elit. Cras nec mauris vulputate, sodales tellus quis, venenatis purus. Curabitur nec metus velit."
  }
];

const render = () => {
  var container = document.getElementById("root");

  projects.forEach( p => p.visible = true );

  //const kinds = new Set(projects.map(p => p.kind));
  //const years = new Set(projects.map(p => p.year));

  const filters = new Set();

  const button = document.createElement("button");
  button.innerHTML = "Kind Z";
  button.id = "kind-z";
  filters.add("Kind Z");

  button.onclick = () => {
    if (filters.has("Kind Z")) {
      filters.delete("Kind Z");
      projects.forEach( p => p.visible = p.kind !== "Kind Z" );
    } else {
      filters.add("Kind Z");
      projects.forEach( p => p.visible = p.kind === "Kind Z" );
    }
    showOrHideProjects();
  };

  container.appendChild(button);

  function showOrHideProjects() {
    projects.forEach( (project, i) => {
      var card = document.getElementById(`project-${i}`);
      if (project.visible) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    })
  }

  function addCardElement(card, kind, content) {
    let element = document.createElement(kind);
    element.innerHTML = content;
    card.appendChild(element);
  }

  function addCard(project, i) {
    var project = projects[i];
    var card = document.createElement("div");
    card.setAttribute("id", `project-${i}`);
    card.setAttribute("class", "card");

    addCardElement(card, "h1", project["name"]);
    addCardElement(card, "h3", project["kind"]);
    addCardElement(card, "h3", project["year"]);
    addCardElement(card, "p", project["description"]);

    container.appendChild(card);
  }

  function renderProjects() {
    projects.forEach( (project, i) => addCard(project, i) );
    showOrHideProjects();
  }

  renderProjects();
};
