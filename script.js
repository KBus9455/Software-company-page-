const btnMenu = document.querySelector('i');
const listMenu = document.querySelector('nav');
btnMenu.addEventListener('click', function () {
  listMenu.classList.toggle('active');
});

const listCareers = [...document.querySelectorAll('table tr')];

const modal = document.querySelector('.modal');
let modalTitle = document.querySelector('.modal-title');
let modalContent = document.querySelector('.modal-body p');

listCareers.forEach((item, index) => {
  item.addEventListener('click', () => {
    console.log(index - 1);
    if (index === 0) return;
    modal.style.display = 'block';
    modalTitle.textContent = careersContent[index - 1].title;
    modalContent.textContent = careersContent[index - 1].content;
  });
});

const closeButton = document.querySelector('.modal-footer button');

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

const careersContent = [
  {
    title: '.NET Developer/C#',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat id, beatae fugiat cupiditate aliquam quis neque veniam eaque omnis soluta, consequuntur iusto nostrum libero exercitationem aperiam ex molestiae pariatur quos incidunt! Laboriosam autem odit consequatur fugit dignissimos alias, magnam soluta blanditiis dolores eligendi reiciendis deserunt nisi voluptatum doloremque neque quibusdam et obcaecati nostrum delectus natus non pariatur, at ab. Vitae dicta perferendis ab quibusdam. Iure veritatis iusto adipisci vero at sed veniam, ad odit, id eveniet dolore. Accusamus assumenda consectetur, dolorum tempora quas ipsa ab vero ea, facilis accusantium, eos explicabo commodi maxime nisi esse sequi perspiciatis totam nesciunt voluptatibus.',
  },
  {
    title: 'Project Manager',
    content:
      'Suspendisse sollicitudin mattis gravida. Donec dignissim, orci eget tincidunt porta, metus lectus porttitor ex, ac varius erat turpis id mi. Ut id diam eu est sodales vehicula. Nunc in luctus leo, id iaculis libero. Integer laoreet pretium iaculis. Donec condimentum, odio ac lobortis tempus, neque libero venenatis purus, eu tincidunt magna lacus id sem. Proin nec mi at dui ultricies sodales. Nulla sed vulputate ligula. Aenean gravida eleifend lorem sit amet viverra. Phasellus feugiat est vel dui sollicitudin eleifend. Nam sit amet commodo est. Maecenas eget magna tortor. Donec nec massa nec elit convallis sollicitudin et ut mauris. Integer lacinia tincidunt erat in consectetur. Curabitur at sagittis neque, quis scelerisque quam. Sed semper odio vel magna consectetur malesuada.',
  },
  {
    title: 'HR & Recruitment Specialist',
    content:
      'Donec lacinia volutpat est, vel lacinia odio lobortis id. Mauris felis urna, elementum at malesuada sed, bibendum id massa. Sed semper ut metus cursus efficitur. Duis vel quam lorem. Aenean volutpat condimentum nulla at bibendum. Curabitur eu sapien mattis, rutrum nibh sit amet, posuere lorem. Pellentesque id tincidunt nisl, sed commodo quam. Fusce dignissim erat id orci imperdiet scelerisque. Donec tincidunt, ante eu vestibulum pellentesque, dolor ex laoreet diam, eget euismod lectus neque in quam. Phasellus urna arcu, finibus in augue eget, venenatis mattis turpis. In fringilla iaculis nibh, egestas interdum purus facilisis sit amet. Curabitur mattis odio arcu, non sagittis ipsum efficitur id. Cras vehicula aliquet risus quis convallis. Cras ut congue nisi, sed laoreet sapien. Fusce finibus nibh at magna fermentum, non cursus ipsum venenatis.',
  },
  {
    title: 'Business Manager',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat id, beatae fugiat cupiditate aliquam quis neque veniam eaque omnis soluta, consequuntur iusto nostrum libero exercitationem aperiam ex molestiae pariatur quos incidunt! Laboriosam autem odit consequatur fugit dignissimos alias, magnam soluta blanditiis dolores eligendi reiciendis deserunt nisi voluptatum doloremque neque quibusdam et obcaecati nostrum delectus natus non pariatur, at ab. Vitae dicta perferendis ab quibusdam. Iure veritatis iusto adipisci vero at sed veniam, ad odit, id eveniet dolore. Accusamus assumenda consectetur, dolorum tempora quas ipsa ab vero ea, facilis accusantium, eos explicabo commodi maxime nisi esse sequi perspiciatis totam nesciunt voluptatibus.',
  },
  {
    title: 'Frontend Developer',
    content:
      'Vivamus vehicula ante a dui ornare molestie. Sed quis leo et orci iaculis maximus vitae porta dui. Integer semper felis in commodo euismod. Aenean molestie orci nibh, et ultricies risus molestie vel. Sed tincidunt augue eu odio vestibulum cursus. Quisque dictum risus justo. Aliquam vitae mi eget nibh sagittis convallis. Donec vitae metus tortor. Suspendisse a pharetra nisi. Etiam dapibus massa vel felis ornare convallis. Aenean id est maximus, placerat nisi quis, lacinia diam. Nulla eu ornare quam. Nunc consequat sit amet ipsum at venenatis. Integer et justo et purus sagittis maximus.',
  },
  {
    title: 'Software Tester',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat id, beatae fugiat cupiditate aliquam quis neque veniam eaque omnis soluta, consequuntur iusto nostrum libero exercitationem aperiam ex molestiae pariatur quos incidunt! Laboriosam autem odit consequatur fugit dignissimos alias, magnam soluta blanditiis dolores eligendi reiciendis deserunt nisi voluptatum doloremque neque quibusdam et obcaecati nostrum delectus natus non pariatur, at ab. Vitae dicta perferendis ab quibusdam. Iure veritatis iusto adipisci vero at sed veniam, ad odit, id eveniet dolore. Accusamus assumenda consectetur, dolorum tempora quas ipsa ab vero ea, facilis accusantium, eos explicabo commodi maxime nisi esse sequi perspiciatis totam nesciunt voluptatibus.',
  },
  {
    title: '.NET Developer/C#',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat id, beatae fugiat cupiditate aliquam quis neque veniam eaque omnis soluta, consequuntur iusto nostrum libero exercitationem aperiam ex molestiae pariatur quos incidunt! Laboriosam autem odit consequatur fugit dignissimos alias, magnam soluta blanditiis dolores eligendi reiciendis deserunt nisi voluptatum doloremque neque quibusdam et obcaecati nostrum delectus natus non pariatur, at ab. Vitae dicta perferendis ab quibusdam. Iure veritatis iusto adipisci vero at sed veniam, ad odit, id eveniet dolore. Accusamus assumenda consectetur, dolorum tempora quas ipsa ab vero ea, facilis accusantium, eos explicabo commodi maxime nisi esse sequi perspiciatis totam nesciunt voluptatibus.',
  },
];
