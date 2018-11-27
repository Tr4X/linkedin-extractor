/* exported onLinkedInLoad */
import CountryCodes from './country-codes';

interface Output {
  basics?: object;
  education?: object;
  languages?: object;
  interests?: object;
  projects?: object;
  publications?: object;
  references?: object;
  skills?: object;
  work?: object;
}

interface Position {
  company: string,
  position: string,
  website: string,
  startDate: string,
  date: string,
  summary: string,
  highlights: Array<string>,
  projects: Array<string>,
  accomplishments: Array<string>,
  technologies: Array<string>
  endDate?: string
};

interface Education {
  institution: string,
  area: string,
  studyType: string,
  startDate: string,
  date: string,
  gpa: string,
  courses: Array<string>,
  endDate?: string
}

interface Certification {
  name: string,
  startDate: string,
  date: string,
  endDate?: string
}

class LinkedInToJsonResume {
  target: Output;
  constructor() {
    this.target = {};
  }

  getOutput() {
    // sort the object
    const propertyOrder = [
      'basics',
      'work',
      'volunteer',
      'education',
      'certifications',
      'awards',
      'publications',
      'skills',
      'languages',
      'interests',
      'references',
      'projects'
    ];

    const sortedTarget = {};
    for (const p of propertyOrder) {
      if (p in this.target) {
        sortedTarget[p] = this.target[p];
      }
    }
    return sortedTarget;
  }

  getWorkExperienceTable(mainThis) {
    let table = document.getElementById("work-table");
    for (var i = 0; i < this.target.work.length; i++) {
      let row = table.insertRow(-1);
      row.classList.add("work-row");
      let date = row.insertCell(0);
      let dateInput = document.createElement('input');
      dateInput.type = "text";
      dateInput.size = 25;
      dateInput.classList.add("work-date-input");
      dateInput.value = this.target.work[i]['date'];
      date.appendChild(dateInput);

      let company = row.insertCell(1);
      let companyInput = document.createElement('input');
      companyInput.type = "text";
      companyInput.size = 35;
      companyInput.classList.add("work-company-input");
      companyInput.value = this.target.work[i]['company'];
      company.appendChild(companyInput);

      let position = row.insertCell(2);
      let positionInput = document.createElement('input');
      positionInput.type = "text";
      positionInput.size = 35;
      positionInput.classList.add("work-position-input");
      positionInput.value = this.target.work[i]['position'];
      position.appendChild(positionInput);

      let summary = row.insertCell(3);
      let summaryInput = document.createElement('input');
      summaryInput.type = "text";
      summaryInput.size = 35;
      summaryInput.classList.add("work-summary-input");
      summaryInput.value = this.target.work[i]['summary'];
      summary.appendChild(summaryInput);


      let addProjectCell = row.insertCell(4);
      var addBtn = document.createElement("BUTTON");
      var addText = document.createTextNode("Add project");
      var _this = this;
      let _i = i;
      addBtn.appendChild(addText);  

      let onclick = function() {
        //console.log(this.target);
        //console.log(_i);
        //console.log(_this.target);
        //console.log(_this.target.work[_i]['projects']);
        var project = prompt("Enter the name of the project", "");
        var accomplishments = prompt("Enter the accomplishments of the project", "");
        var technologies = prompt("Enter the technologies used in the project", "");
        if (project == null) project = '';
        if (accomplishments == null) accomplishments = '';
        if (technologies == null) technologies = '';
        //_this.saveProject(i, project, accomplishments, technologies);
        _this.target.work[_i]['projects'].push(project);
        _this.target.work[_i]['accomplishments'].push(accomplishments);
        _this.target.work[_i]['technologies'].push(technologies);
        _this.cleanWorkTable();
        _this.getWorkExperienceTable();
        //console.log(_this.target.work[_i]);
      };
      addBtn.addEventListener ("click", onclick.bind(this));
      addProjectCell.appendChild(addBtn);


      let deleteCell = row.insertCell(5);
      var btn = document.createElement("BUTTON");
      var t = document.createTextNode("DELETE");
      btn.appendChild(t);  
      btn.addEventListener ("click", function() {
        row.style.display = 'none';
      });
        deleteCell.appendChild(btn);

      if(this.target.work[i]['projects'] != null && this.target.work[i]['projects'].length > 0){

        let projectsTitleRow = table.insertRow(-1);
        projectsTitleRow.insertCell(0);
        let proTitleCell = projectsTitleRow.insertCell(1);
        let accTitleCell = projectsTitleRow.insertCell(2);
        let technoTitleCell = projectsTitleRow.insertCell(3);
        proTitleCell.innerHTML = 'Projects';
        proTitleCell.style.fontWeight = 'bold';
        proTitleCell.style.fontSyle = 'italic';
        accTitleCell.innerHTML = 'Accomplishments';
        accTitleCell.style.fontWeight = 'bold';
        accTitleCell.style.fontSyle = 'italic';
        technoTitleCell.innerHTML = 'Technologies';
        technoTitleCell.style.fontWeight = 'bold';
        technoTitleCell.style.fontSyle = 'italic';

        for(let j =0; j < this.target.work[i]['projects'].length; j++){
          let projectsRow = table.insertRow(-1);
          projectsRow.insertCell(0);

          projectsRow.id = i;
          projectsRow.classList.add("project-sub-row");

          var projDiv = document.createElement("div");
          projDiv.innerHTML = this.target.work[i]['projects'][j];
          projDiv.classList.add("project-project-cell");
          let proCell = projectsRow.insertCell(1);
          proCell.appendChild(projDiv);

          var accDiv = document.createElement("div");
          accDiv.innerHTML = this.target.work[i]['accomplishments'][j];
          accDiv.classList.add("project-accomplishment-cell");
          let accCell = projectsRow.insertCell(2);
          accCell.appendChild(accDiv);

          var techDiv = document.createElement("div");
          techDiv.innerHTML = this.target.work[i]['technologies'][j];
          techDiv.classList.add("project-technologie-cell");
          let techCell = projectsRow.insertCell(3);
          techCell.appendChild(techDiv);

        }
      }
    }
  }

  saveProject(i, project, accomplishments, technologies) {
    this.target.work[i]['projects'].push(projects);
    this.target.work[i]['accomplishments'].push(accomplishments);
    this.target.work[i]['technologies'].push(technologies);
  }

  cleanWorkTable() {
    var workTable = document.getElementById("work-table");
    while(workTable.hasChildNodes())
    {
       workTable.removeChild(workTable.firstChild);
    }
  }

  getLanguages() {
    let table = document.getElementById("languages-table");
    for(var i = 0; i < this.target.languages.length; i++) {
      let row = table.insertRow(-1);
      row.classList.add("language-row");

      let langCell = row.insertCell(0);
      let lang = document.createElement("input");
      lang.type = "text";
      lang.size = 25;
      lang.classList.add("language-input");
      lang.value = this.target.languages[i]['language'];
      langCell.appendChild(lang);

      let fluencyCell = row.insertCell(1);
      let fluency = document.createElement("input");
      fluency.type = "text";
      fluency.size = 35;
      fluency.classList.add("language-fluency-input");
      fluency.value = this.target.languages[i]['fluency'];
      fluencyCell.appendChild(fluency);



      let deleteCell = row.insertCell(2);
      var btn = document.createElement("BUTTON");
      var t = document.createTextNode("DELETE");
      btn.appendChild(t);  
      btn.addEventListener ("click", function() {
        row.style.display = 'none';
      });
      deleteCell.appendChild(btn);
    }
  }

  getSkills() {
    let table = document.getElementById("skills-table");
    for(var i = 0; i < this.target.skills.length; i++) {
      let row = table.insertRow(-1);
      row.classList.add("skill-row");
      let skillCell = row.insertCell(0);

      let skill = document.createElement("input");
      skill.type = "text";
      skill.size = 35;
      skill.classList.add("skill-input");
      skill.value = this.target.skills[i]['name'];
      skillCell.appendChild(skill);

      let skillLevelCell = row.insertCell(1);
      var selectList = document.createElement("select");
      selectList.classList.add("skill-level-select");
      selectList.value = this.target.skills[i]['level'];
      skillLevelCell.appendChild(selectList);

      for (var j = 1; j <= 5; j++) {
          var option = document.createElement("option");
          option.value = j;
          option.text = j;
          if (this.target.skills[i]['level'] == j) {
            option.selected = true;
          } else  {
            option.selected = false;
          }
          selectList.appendChild(option);
      }

      let deleteCell = row.insertCell(2);
      var btn = document.createElement("BUTTON");
      var t = document.createTextNode("DELETE");
      btn.appendChild(t);  
      btn.addEventListener ("click", function() {
        row.style.display = 'none';
      });
      deleteCell.appendChild(btn);
    }
  }

  getEducation() {
    let table = document.getElementById("education-table");
    for(var i = 0; i < this.target.education.length; i++) {
      let row = table.insertRow(-1);
      row.classList.add("education-row");

      let dateCell = row.insertCell(0);
      let date = document.createElement("input");
      date.type = "text";
      date.size = 25;
      date.classList.add("education-date-input");
      date.value = this.target.education[i]['date'];
      dateCell.appendChild(date);

      let typeCell = row.insertCell(1);
      let type = document.createElement("input");
      type.type = "text";
      type.size = 35;
      type.classList.add("education-type-input");
      type.value = this.target.education[i]['studyType'];
      typeCell.appendChild(type);

      let typeCell = row.insertCell(1);
      let type = document.createElement("input");
      type.type = "text";
      type.size = 35;
      type.classList.add("education-school-input");
      type.value = this.target.education[i]['institution'];
      typeCell.appendChild(type);


      let deleteCell = row.insertCell(3);
      var btn = document.createElement("BUTTON");
      var t = document.createTextNode("DELETE");
      btn.appendChild(t);  
      btn.addEventListener ("click", function() {
        row.style.display = 'none';
      });
      deleteCell.appendChild(btn);
    }
  }

  getCertifications() {
    let table = document.getElementById("certifs-table");
    if(!this.target.certifications) this.target.certifications = [];
    for(var i = 0; i < this.target.certifications.length; i++) {
      let row = table.insertRow(-1);
      row.classList.add("certif-row");

      let dateCell = row.insertCell(0);
      let date = document.createElement("input");
      date.type = "text";
      date.size = 35;
      date.classList.add("certif-date-input");
      date.value = this.target.certifications[i]['date'];
      dateCell.appendChild(date);

      let nameCell = row.insertCell(1);
      let name = document.createElement("input");
      name.type = "text";
      name.size = 35;
      name.classList.add("certif-name-input");
      name.value = this.target.certifications[i]['name'];
      nameCell.appendChild(name);

      let deleteCell = row.insertCell(2);
      var btn = document.createElement("BUTTON");
      var t = document.createTextNode("DELETE");
      btn.appendChild(t);  
      btn.addEventListener ("click", function() {
        row.style.display = 'none';
      });
      deleteCell.appendChild(btn);
    }
  }

  _extend(target, source) {
    target = target || {};
    Object.keys(source).forEach(key => (target[key] = source[key]));
  }

  processProfile(source) {
    this.target.basics = this.target.basics || {};

    const ccItem = CountryCodes.find(item => item.name === source.country);
    let countryCode = '';
    if (ccItem) {
      countryCode = ccItem['alpha-2'];
    }

    this._extend(this.target.basics, {
      name: `${source.firstName} ${source.lastName}`,
      firstName: `${source.firstName}`,
      lastName: `${source.lastName}`,
      label: source.headline,
      picture: '',
      email: '',
      phone: '',
      website: source.websites
        ? source.websites
            .split(',')[0]
            .split(':')
            .slice(1)
            .join(':')
        : '',
      summary: source.summary,
      location: {
        address: source.address,
        postalCode: source.zipCode,
        city: source.location ? source.location.name : '',
        countryCode: countryCode,
        region: ''
      },
      profiles: source.twitterHandles
        ? [
            {
              network: 'Twitter',
              username: source.twitterHandles,
              url: `https://twitter.com/${source.twitterHandles}`
            }
          ]
        : []
    });
  }

  processEmail(source) {
    this.target.basics = this.target.basics || {};
    this._extend(this.target.basics, { email: source.address });
  }

  processPosition(source) {
    function processPosition(position) {
      let object = <Position>{
        company: position.companyName,
        position: position.title || '',
        website: '',
        startDate: `${position.startDate}`,
        summary: position.description,
        highlights: [''],
        projects: [],
        accomplishments: [],
        technologies: []
      };

      if (position.endDate) {
        object.endDate = `${position.endDate}`;
        object.date = `${position.startDate}` + " - " + `${position.endDate}`;
      } else {
        object.date = `${position.startDate}` + " - now";
      }

      return object;
    }

    this.target.work = source.map(processPosition);
  }

  processEducation(source) {
    function processEducation(education) {
      let object = <Education>{
        institution: education.institution,
        area: '',
        studyType: education.degree,
        startDate: `${education.startDate}`,
        gpa: '',
        courses: []
      };

      if (education.endDate) {
        object.endDate = `${education.endDate}`;
        object.date = `${education.startDate}` + " - " + `${education.endDate}`;
      } else {
        object.date = `${education.startDate}` + " - now";
      }

      return object;
    }

    this.target.education = source.map(processEducation);
  }

  processCertification(source) {
    function processCertification(certification) {
      let object = <Certification>{
        startDate: `${certification.startDate}`,
        name: `${certification.name}`,
      };

      if (certification.endDate) {
        object.endDate = `${certification.endDate}`;
        object.date = `${certification.startDate}` + " - " + `${certification.endDate}`;
      } else {
        object.date = `${certification.startDate}` + " - now";
      }

      return object;
    }

    this.target.certifications = source.map(processCertification);
  }

  processSkills(skills) {
    this.target.skills = skills.map(skill => ({
      name: skill,
      level: 1,
      keywords: []
    }));
  }

  processLanguages(languages) {
    function cleanProficiencyString(proficiency) {
      proficiency = proficiency.toLowerCase().replace(/_/g, ' ');
      return proficiency[0].toUpperCase() + proficiency.substr(1);
    }

    this.target.languages = languages.map(language => ({
      language: language.name,
      fluency: language.proficiency ? cleanProficiencyString(language.proficiency) : null
    }));
  }

  processReferences(references) {
    this.target.references = references.map(reference => ({
      name: `${reference.recommenderFirstName} ${reference.recommenderLastName} - ${reference.recommenderCompany}`,
      reference: reference.recommendationBody
    }));
  }

  processInterests(interests) {
    this.target.interests = interests.map(interest => ({
      name: interest,
      keywords: []
    }));
  }

  processProjects(projects) {
    this.target.projects = projects.map(project => ({
      ...{
        name: project.title,
        startDate: `${project.startDate}`,
        summary: project.description,
        url: project.url
      },
      ...(project.endDate ? { endDate: `${project.endDate}` } : {})
    }));
  }

  processPublications(publications) {
    this.target.publications = publications.map(publication => ({
      name: publication.name,
      publisher: publication.publisher,
      releaseDate: publication.date,
      website: publication.url,
      summary: publication.description
    }));
  }
}

export default LinkedInToJsonResume;
