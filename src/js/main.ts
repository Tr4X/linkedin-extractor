//import * as fs from "fs";

import LinkedInToJsonResume from './converter'

const filedrag = document.getElementById('filedrag');
const fileselect = document.getElementById('fileselect');
let fileName = null;

interface FileReaderEventTarget extends EventTarget {
  result: string;
}

interface FileReaderEvent extends Event {
  target: FileReaderEventTarget;
  getMessage(): string;
}

interface Window {
  ga: any;
  Prism: { highlightElement(elem: HTMLElement): void };
}

// file drag hover
function fileDragHover(e) {
  e.stopPropagation();
  e.preventDefault();
  e.target.className = e.type === 'dragover' ? 'hover' : '';
}

function reset() {
  linkedinToJsonResume = new LinkedInToJsonResume();
  linkedinToJsonResume.target.work = [];
  linkedinToJsonResume.target.languages = [];
  linkedinToJsonResume.target.skills = [];
  linkedinToJsonResume.target.education = [];
  linkedinToJsonResume.target.certifications = [];
  linkedinToJsonResume.target.basics = {};
}

window.onload = reset;

function generateDocx() {
  const fs = require('fs');
  //require('buffer');

  var global = global || window;
  global.Buffer = global.Buffer || require('buffer').Buffer;

  const doc = new Document(undefined, {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  });
  const lineBreakParagraph = new Paragraph(" ");

  //doc.Header.createImage(fs.readFileSync("./src/klanik-header.jpg"), 800, 181);
  //doc.Footer.createImage(fs.readFileSync("./src/klanik-footer.jpg"), 800, 48);
  doc.addParagraph(lineBreakParagraph);
  doc.createImage(fs.readFileSync("./src/klanik-header.jpg"), 800, 181, {
    floating: {
        horizontalPosition: {
            offset: 0,
        },
        verticalPosition: {
            offset: 0,
        },
    },
  });
  doc.createImage(fs.readFileSync("./src/klanik-competences.png"), 800, 48, {
    floating: {
        horizontalPosition: {
            offset: 0,
        },
        verticalPosition: {
            offset: 0,
        },
    },
  });

  const secondHeader = doc.createHeader();
  //secondHeader.createImage(fs.readFileSync("./src/klanik-second-header.png"), 800, 181);
  secondHeader.createImage(fs.readFileSync("./src/klanik-header.jpg"), 800, 181);
    doc.addSection({
      headers: {
        default: secondHeader 
      },
      pageNumberStart: 0,
      //pageNumberFormatType: docx.PageNumberFormat.DECIMAL,
    });

  doc.addParagraph(lineBreakParagraph);


  doc.Styles.createParagraphStyle("arialParag", "arialParag").font("Arial").spacing({line: 276});

  var lineCount = 0;
  if (linkedinToJsonResume.target.skills.length % 2 == 0)
    lineCount = linkedinToJsonResume.target.skills.length / 2;
  else 
    lineCount = (linkedinToJsonResume.target.skills.length / 2) + 1;

  var colSizes = [];
  colSizes.push(10000);
  colSizes.push(10000);
  colSizes.push(10000);
  colSizes.push(10000);
  var table = new Table(lineCount, 4, colSizes);
  doc.addTable(table);
  //table.Properties.setWidth(800, WidthType.AUTO);

  for (var i = 0; i < linkedinToJsonResume.target.skills.length; i+=2) {
    table.getCell(i/2, 0).addContent(new Paragraph("   " + linkedinToJsonResume.target.skills[i]['name'] + "   ").style("arialParag"))
    var levelTxt = '';
    for (var j = 1; j <= linkedinToJsonResume.target.skills[i]['level']; j++) {
      levelTxt += '*';
    }
    table.getCell(i/2, 1).addContent(new Paragraph("   " + levelTxt + "   ").style("arialParag"));

    if(linkedinToJsonResume.target.skills[i + 1]){
      table.getCell(i/2, 2).addContent(new Paragraph("   " + linkedinToJsonResume.target.skills[i + 1]['name'] + "   ").style("arialParag"))
      var levelTxt = '';
      for (var j = 1; j <= linkedinToJsonResume.target.skills[i + 1]['level']; j++) {
        levelTxt += '*';
      }
      table.getCell(i/2, 3).addContent(new Paragraph("   " + levelTxt + "   ").style("arialParag"));
    }
  }
  doc.addParagraph(lineBreakParagraph);

  var lineLangCount = linkedinToJsonResume.target.languages.length;

  var langTable = new Table(lineLangCount, 2, colSizes);
  doc.addTable(langTable);
  //langTable.Properties.setWidth(800, WidthType.AUTO);

  for (var i = 0; i < lineLangCount; i++) {
    langTable.getCell(i, 0).addContent(new Paragraph("   " + linkedinToJsonResume.target.languages[i]['language'] + "   ").style("arialParag"));
    langTable.getCell(i, 1).addContent(new Paragraph("   " + linkedinToJsonResume.target.languages[i]['fluency'] + "   ").style("arialParag"));
  }

  doc.addParagraph(lineBreakParagraph);

  doc.createImage(fs.readFileSync("./src/klanik-education.png"), 800, 48);

  doc.addParagraph(lineBreakParagraph);


  for (var i = 0; i < linkedinToJsonResume.target.education.length; i++) {
    let educParag = new Paragraph();
    let text = linkedinToJsonResume.target.education[i]['date'] + ": " + linkedinToJsonResume.target.education[i]['studyType'] + ": " + linkedinToJsonResume.target.education[i]['institution'];
    educParag.addRun(new TextRun(text).font("Arial"));
    doc.addParagraph(educParag);
  }

  doc.addParagraph(lineBreakParagraph);

  doc.createImage(fs.readFileSync("./src/klanik-certifs.png"), 800, 48);

  doc.addParagraph(lineBreakParagraph);

  for (var i = 0; i < linkedinToJsonResume.target.certifications.length; i++) {
    let certifParag = new Paragraph();
    let text = linkedinToJsonResume.target.certifications[i]['date'] + ": " + linkedinToJsonResume.target.certifications[i]['name'];
    certifParag.addRun(new TextRun(text).font("Arial"));
    doc.addParagraph(certifParag);
  }

  doc.addParagraph(lineBreakParagraph);

  doc.createImage(fs.readFileSync("./src/klanik-work-summary.png"), 800, 48);

  doc.addParagraph(lineBreakParagraph);

  var workTable = new Table(linkedinToJsonResume.target.work.length, 3, [10000, 10000, 10000]);
  doc.addTable(workTable);

  for (var i = 0; i < linkedinToJsonResume.target.work.length; i++) {
    workTable.getCell(i, 0).addContent(new Paragraph("   " + linkedinToJsonResume.target.work[i]['date'] + "   ").style("arialParag"));
    workTable.getCell(i, 1).addContent(new Paragraph("   " + linkedinToJsonResume.target.work[i]['company'] + "   ").style("arialParag"));
    workTable.getCell(i, 2).addContent(new Paragraph("   " + linkedinToJsonResume.target.work[i]['position'] + "   ").style("arialParag"));
  }


  doc.addParagraph(lineBreakParagraph);

  doc.createImage(fs.readFileSync("./src/klanik-work.png"), 800, 48);


  for (var i = 0; i < linkedinToJsonResume.target.work.length; i++) {


    if(linkedinToJsonResume.target.work[i]['projects'] != null && linkedinToJsonResume.target.work[i]['projects'].length > 0) {
      doc.addParagraph(lineBreakParagraph);
      
      let projectParagraph = new Paragraph();
      let text = linkedinToJsonResume.target.work[i]['date'] + " : " + linkedinToJsonResume.target.work[i]['position'] + " at " + linkedinToJsonResume.target.work[i]['company'];
      projectParagraph.addRun(new TextRun(text).bold().font("Arial"));
      doc.addParagraph(projectParagraph);

      doc.addParagraph(lineBreakParagraph);


      let headerParagraph = new Paragraph();
      headerParagraph.addRun(new TextRun("Projects : ").font("Arial"));
      doc.addParagraph(headerParagraph);

      for (var projIndex = 0; projIndex < linkedinToJsonResume.target.work[i]['projects'].length; projIndex++){
        let bulletParagraph = new Paragraph();
        let bulletText = linkedinToJsonResume.target.work[i]['projects'][projIndex];
        bulletParagraph.addRun(new TextRun(bulletText).font("Arial"));
        doc.addParagraph(bulletParagraph.bullet());
      }

      doc.addParagraph(lineBreakParagraph);


      let header2Paragraph = new Paragraph();
      header2Paragraph.addRun(new TextRun("Accomplishments : ").font("Arial"));
      doc.addParagraph(header2Paragraph);

      for (var proj2Index = 0; proj2Index < linkedinToJsonResume.target.work[i]['accomplishments'].length; proj2Index++){
        let bullet2Paragraph = new Paragraph();
        let bullet2Text = linkedinToJsonResume.target.work[i]['accomplishments'][proj2Index];
        bullet2Paragraph.addRun(new TextRun(bullet2Text).font("Arial"));
        doc.addParagraph(bullet2Paragraph.bullet());
      }

      doc.addParagraph(lineBreakParagraph);


      let header3Paragraph = new Paragraph();
      header3Paragraph.addRun(new TextRun("Technologies : ").font("Arial"));
      doc.addParagraph(header3Paragraph);

      for (var proj3Index = 0; proj3Index < linkedinToJsonResume.target.work[i]['technologies'].length; proj3Index++){
        let bullet3Paragraph = new Paragraph();
        let bullet3Text = linkedinToJsonResume.target.work[i]['technologies'][proj3Index];
        bullet3Paragraph.addRun(new TextRun(bullet3Text).font("Arial"));
        doc.addParagraph(bullet3Paragraph.bullet());
      }
    }
  }


  const packer = new Packer();

  var documentName = linkedinToJsonResume.target.basics.firstName + ' ' + linkedinToJsonResume.target.basics.lastName + '.docx';

  packer.toBlob(doc).then(blob => {
      saveAs(blob, documentName);
  });
}

function recompile() {
  linkedinToJsonResume.target.work = [];
  linkedinToJsonResume.target.languages = [];
  linkedinToJsonResume.target.skills = [];
  linkedinToJsonResume.target.education = [];
  linkedinToJsonResume.target.certifications = [];
  linkedinToJsonResume.target.basics = {};

  // GET BASICS

  var firstName = document.getElementById("input-firstname").value;
  var lastName = document.getElementById("input-lastname").value;
  var label = document.getElementById("input-label").value;
  var email = document.getElementById("input-email").value;
  var phone = document.getElementById("input-phone").value;
      
  linkedinToJsonResume.target.basics = {"firstName": firstName, "lastName": lastName, "label": label, "email": email, "phone": phone };

  // GET LANGUAGES
  var langRows = document.getElementsByClassName("language-row");
  for(var i = 0; i < langRows.length; i++) {
    if(langRows[i].style.display != 'none') {
      var language = langRows[i].getElementsByClassName("language-input")[0].value;
      var languageFluency = langRows[i].getElementsByClassName("language-fluency-input")[0].value;

      linkedinToJsonResume.target.languages.push({"language": language, "fluency": languageFluency});
    }
  }

  // GET POSITIONS
  var workRows = document.getElementsByClassName("work-row");
  for(var i = 0; i < workRows.length; i++) {
    if(workRows[i].style.display != 'none') {
      var date = workRows[i].getElementsByClassName("work-date-input")[0].value;
      var company = workRows[i].getElementsByClassName("work-company-input")[0].value;
      var position = workRows[i].getElementsByClassName("work-position-input")[0].value;
      var summary = workRows[i].getElementsByClassName("work-summary-input")[0].value;

      linkedinToJsonResume.target.work.push({"date": date, "company": company, "position": position, "summary": summary, "projects": [], "accomplishments": [], "technologies": []});
    }
  }
  
  var projectsRows = document.getElementsByClassName("project-sub-row");
  for(var i = 0; i < projectsRows.length; i++) {
    //console.log("SUB ROW");
    //console.log(projectsRows[i].getElementsByClassName("project-project-cell"));
    var projectIndex =  projectsRows[i].id;
    //console.log(projectsRows[i].getElementsByClassName("project-project-cell")[0].innerText || projectsRows[i].getElementsByClassName("project-project-cell")[0].textContent);
    var projectValue = (projectsRows[i].getElementsByClassName("project-project-cell")[0].innerText || projectsRows[i].getElementsByClassName("project-project-cell")[0].textContent);
    var accomplishmentsValue = (projectsRows[i].getElementsByClassName("project-accomplishment-cell")[0].innerText || projectsRows[i].getElementsByClassName("project-accomplishment-cell")[0].textContent);
    var technoValue = (projectsRows[i].getElementsByClassName("project-technologie-cell")[0].innerText || projectsRows[i].getElementsByClassName("project-technologie-cell")[0].textContent);

    //console.log(projectValue);
    //console.log(accomplishmentsValue);
    //console.log(technoValue);

    linkedinToJsonResume.target.work[projectIndex]['projects'].push(projectValue);
    linkedinToJsonResume.target.work[projectIndex]['accomplishments'].push(accomplishmentsValue);
    linkedinToJsonResume.target.work[projectIndex]['technologies'].push(technoValue);
  }

  // GET SKILLS
  var skillRows = document.getElementsByClassName("skill-row");
  for(var i = 0; i < skillRows.length; i++) {
    if(skillRows[i].style.display != 'none') {
      var skill = skillRows[i].getElementsByClassName("skill-input")[0].value;
      var skillLevel = skillRows[i].getElementsByClassName("skill-level-select")[0].value;

      linkedinToJsonResume.target.skills.push({"name": skill, "level": skillLevel});
    }
  }

  // GET EDUCATION
  var educationRows = document.getElementsByClassName("education-row");
  for(var i = 0; i < educationRows.length; i++) {
    if(educationRows[i].style.display != 'none') {
      var date = educationRows[i].getElementsByClassName("education-date-input")[0].value;
      var institution = educationRows[i].getElementsByClassName("education-school-input")[0].value;
      var studyType  = educationRows[i].getElementsByClassName("education-type-input")[0].value;

      linkedinToJsonResume.target.education.push({"date": date, "institution": institution, "studyType": studyType});
    }
  }

  // GET CERTIFICATIONS
  var certifRows = document.getElementsByClassName("certif-row");
  for(var i = 0; i < certifRows.length; i++) {
    if(certifRows[i].style.display != 'none') {
      var date = certifRows[i].getElementsByClassName("certif-date-input")[0].value;
      var name = certifRows[i].getElementsByClassName("certif-name-input")[0].value;

      linkedinToJsonResume.target.certifications.push({"name": name, "date": date});
    }
  }

  // REBUILD UI
  var langTable = document.getElementById("languages-table");
  while(langTable.hasChildNodes())
  {
     langTable.removeChild(langTable.firstChild);
  }

  var skillsTable = document.getElementById("skills-table");
  while(skillsTable.hasChildNodes())
  {
     skillsTable.removeChild(skillsTable.firstChild);
  }

  var workTable = document.getElementById("work-table");
  while(workTable.hasChildNodes())
  {
     workTable.removeChild(workTable.firstChild);
  }

  var educationTable = document.getElementById("education-table");
  while(educationTable.hasChildNodes())
  {
     educationTable.removeChild(educationTable.firstChild);
  }

  var certifsTable = document.getElementById("certifs-table");
  while(certifsTable.hasChildNodes())
  {
     certifsTable.removeChild(certifsTable.firstChild);
  }

  linkedinToJsonResume.getWorkExperienceTable(this);
  linkedinToJsonResume.getLanguages();
  linkedinToJsonResume.getSkills();
  linkedinToJsonResume.getEducation();
  linkedinToJsonResume.getCertifications();

  document.getElementById('input-firstname').value = linkedinToJsonResume.target['basics']['firstName'];
  document.getElementById('input-lastname').value = linkedinToJsonResume.target['basics']['lastName'];
  document.getElementById('input-label').value = linkedinToJsonResume.target['basics']['label'];
  document.getElementById('input-email').value = linkedinToJsonResume.target['basics']['email'];
  document.getElementById('input-phone').value = linkedinToJsonResume.target['basics']['phone'];

  //console.log(linkedinToJsonResume.target);

}

let linkedinToJsonResume;

const compileButton = <HTMLElement>document.querySelector('.docx');
compileButton.addEventListener('click', () => {
  recompile();
  generateDocx();
});


const addLanguageButton = <HTMLElement>document.querySelector('.add-language');
addLanguageButton.addEventListener('click', () => {
  recompile();
  var langTable = document.getElementById("languages-table");
  while(langTable.hasChildNodes())
  {
     langTable.removeChild(langTable.firstChild);
  }
  linkedinToJsonResume.target.languages.push({"language": "", "fluency": ""});
  linkedinToJsonResume.getLanguages();
}

const addWorkButton = <HTMLElement>document.querySelector('.add-work');
addWorkButton.addEventListener('click', () => {
  recompile();

  var workTable = document.getElementById("work-table");
  while(workTable.hasChildNodes())
  {
     workTable.removeChild(workTable.firstChild);
  }
  linkedinToJsonResume.target.work.push({"date": "", "company": "", "position": "", "summary": ""});
  linkedinToJsonResume.getWorkExperienceTable(this);
}

const addSkillButton = <HTMLElement>document.querySelector('.add-skill');
addSkillButton.addEventListener('click', () => {
  recompile();

  var skillTable = document.getElementById("skills-table");
  while(skillTable.hasChildNodes())
  {
     skillTable.removeChild(skillTable.firstChild);
  }
  linkedinToJsonResume.target.skills.push({"name": ""});
  linkedinToJsonResume.getSkills();
}

const addEducationButton = <HTMLElement>document.querySelector('.add-education');
addEducationButton.addEventListener('click', () => {
  recompile();

  var educationTable = document.getElementById("education-table");
  while(educationTable.hasChildNodes())
  {
     educationTable.removeChild(educationTable.firstChild);
  }
  linkedinToJsonResume.target.education.push({"date": "", "institution": "", "studyType": ""});
  linkedinToJsonResume.getEducation();
}

const addCertifButton = <HTMLElement>document.querySelector('.add-certif');
addCertifButton.addEventListener('click', () => {
  recompile();

  var certifsTable = document.getElementById("certifs-table");
  while(certifsTable.hasChildNodes())
  {
     certifsTable.removeChild(certifsTable.firstChild);
  }
  linkedinToJsonResume.target.certifications.push({"date": "", "name": ""});
  linkedinToJsonResume.getCertifications();
}

const downloadButton = <HTMLElement>document.querySelector('.download');
downloadButton.addEventListener('click', () => {
  import('./file').then(save => {
    save.default(
      JSON.stringify(linkedinToJsonResume.getOutput(), undefined, 2),
      'resume.json'
    );
    if (window.ga) {
      window.ga('send', 'event', 'linkedin-to-json-resume', 'download-resume');
    }
  });
});
downloadButton.style.display = 'none';

// file selection
function fileSelectHandler(e) {
  if (window.ga) {
    window.ga('send', 'event', 'linkedin-to-json-resume', 'file-selected');
  }
  Promise.all([
    import('./converter'),
    import('moment'),
    import('isomorphic-unzip/zip-browser'),
    import('./csvtoarray')
  ]).then(modules => {
    const [LinkedInToJsonResume, Moment, Unzip, CsvToArray] = modules;
    const csvToArray = CsvToArray.default;
    const moment = Moment.default;
    //linkedinToJsonResume = new LinkedInToJsonResume.default();

    // cancel event and hover styling
    fileDragHover(e);

    const droppedFiles = e.target.files || e.dataTransfer.files;

    const file = droppedFiles[0];
    fileName = file.name;

    const readBlob = (blob: Blob): Promise<string> => {
      return new Promise(resolve => {
        let reader = new FileReader();
        reader.onload = (e: FileReaderEvent) => {
          resolve(e.target.result);
        };
        reader.readAsText(blob);
      });
    };

    const readEntryContents = (entry: any): Promise<string> => {
      return new Promise(resolve => {
        Unzip.default.getEntryData(entry, (error, blob) => {
          readBlob(blob).then(resolve);
        });
      });
    };

    let unzip = null;
    const getEntries = (file, onend) => {
      unzip = new Unzip.default(file);
      unzip.getEntries(function(error, entries) {
        onend(entries);
      });
    };

    getEntries(file, entries => {
      const promises = entries.map(entry => {
        switch (true) {
          case entry.filename.indexOf('Skills.csv') !== -1:
            return readEntryContents(entry).then(contents => {
              contents = contents.replace(/"/g, '');
              let elements = contents.split('\n');
              elements = elements.slice(1, elements.length - 1);
              linkedinToJsonResume.processSkills(elements);
              return;
            });

          case entry.filename.indexOf('Education.csv') !== -1:
            return readEntryContents(entry).then(contents => {
              const elements = csvToArray(contents);
              const education = elements
                .slice(1, elements.length - 1)
                .map(elem => ({
                  institution: elem[0],
                  startDate: moment(elem[1]).format('YYYY-MM'),
                  endDate: moment(elem[2]).format('YYYY-MM'),
                  notes: elem[3],
                  degree: elem[4],
                  activities: elem[5]
                }));
              linkedinToJsonResume.processEducation(
                education.sort(
                  (e1, e2) => -e1.startDate.localeCompare(e2.startDate)
                )
              );
              return;
            });

          case entry.filename.indexOf('Certifications.csv') !== -1:
            return readEntryContents(entry).then(contents => {
              const elements = csvToArray(contents);
              const certification = elements
                .slice(1, elements.length - 1)
                .map(elem => ({
                  name: elem[0],
                  startDate: moment(elem[3], 'MMM YYYY').format('YYYY'),
                  endDate: elem[4]
                    ? moment(elem[4], 'MMM YYYY').format('YYYY')
                    : null
                }));
              linkedinToJsonResume.processCertification(
                certification.sort(
                  (e1, e2) => -e1.startDate.localeCompare(e2.startDate)
                )
              );
              return;
            });

          case entry.filename.indexOf('Positions.csv') !== -1:
            return readEntryContents(entry).then(contents => {
              const elements = csvToArray(contents);
              const positions = elements
                .slice(1, elements.length - 1)
                .map(elem => {
                  return {
                    companyName: elem[0],
                    title: elem[1],
                    description: elem[2],
                    location: elem[3],
                    startDate: moment(elem[4], 'MMM YYYY').format('YYYY-MM'),
                    endDate: elem[5]
                      ? moment(elem[5], 'MMM YYYY').format('YYYY-MM')
                      : null
                  };
                });
              linkedinToJsonResume.processPosition(
                positions.sort(
                  (p1, p2) => -p1.startDate.localeCompare(p2.startDate)
                )
              );
              return;
            });

          case entry.filename.indexOf('Languages.csv') !== -1:
            return readEntryContents(entry).then(contents => {
              const elements = csvToArray(contents);
              const languages = elements
                .slice(1, elements.length - 1)
                .map(elem => ({
                  name: elem[0],
                  proficiency: elem[1]
                }));
              linkedinToJsonResume.processLanguages(languages);
              return;
            });

          case entry.filename.indexOf('Recommendations Received.csv') !== -1:
            return readEntryContents(entry).then(contents => {
              const elements = csvToArray(contents);
              const recommendations = elements
                .slice(1, elements.length - 1)
                .map(elem => ({
                  recommenderFirstName: elem[0],
                  recommenderLastName: elem[1],
                  recommenderCompany: elem[2],
                  recommenderTitle: elem[3],
                  recommendationBody: elem[4],
                  recommendationDate: elem[5],
                  displayStatus: elem[6]
                }))
                .filter(
                  recommendation => recommendation.displayStatus === 'VISIBLE'
                );
              linkedinToJsonResume.processReferences(recommendations);
              return;
            });

          case entry.filename.indexOf('Profile.csv') !== -1:
            return readEntryContents(entry).then(contents => {
              const elements = csvToArray(contents);
              const profile = {
                firstName: elements[1][0],
                lastName: elements[1][1],
                maidenName: elements[1][2],
                address: elements[1][3],
                birthDate: elements[1][4],
                contactInstructions: elements[1][5],
                headline: elements[1][6],
                summary: elements[1][7],
                industry: elements[1][8],
                country: elements[1][9],
                zipCode: elements[1][10],
                geoLocation: elements[1][11],
                twitterHandles: elements[1][12],
                websites: elements[1][13],
                instantMessengers: elements[1][14]
              };
              linkedinToJsonResume.processProfile(profile);
              return;
            });

          case entry.filename.indexOf('Email Addresses.csv') !== -1:
            return readEntryContents(entry).then(contents => {
              const elements = csvToArray(contents, '\t'); // yes, recommendations use tab-delimiter
              const email = elements
                .slice(1, elements.length - 1)
                .map(elem => ({
                  address: elem[0],
                  status: elem[1],
                  isPrimary: elem[2] === 'Yes',
                  dateAdded: elem[3],
                  dateRemoved: elem[4]
                }))
                .filter(email => email.isPrimary);
              if (email.length) {
                linkedinToJsonResume.processEmail(email[0]);
              }
              return;
            });

          case entry.filename.indexOf('Interests.csv') !== -1:
            return readEntryContents(entry).then(contents => {
              const elements = csvToArray(contents);
              let interests = [];
              elements.slice(1, elements.length - 1).forEach(elem => {
                interests = interests.concat(elem[0].split(','));
              });
              linkedinToJsonResume.processInterests(interests);
              return;
            });

          case entry.filename.indexOf('Projects.csv') !== -1:
            return readEntryContents(entry).then(contents => {
              const elements = csvToArray(contents);
              const projects = elements
                .slice(1, elements.length - 1)
                .map(elem => ({
                  title: elem[0],
                  description: elem[1],
                  url: elem[2],
                  startDate: moment(elem[3]).format('YYYY-MM-DD'),
                  endDate: elem[4] ? moment(elem[4]).format('YYYY-MM-DD') : null
                }));
              linkedinToJsonResume.processProjects(
                projects.sort(
                  (p1, p2) => -p1.startDate.localeCompare(p2.startDate)
                )
              );
              return;
            });

          case entry.filename.indexOf('Publications.csv') !== -1:
            return readEntryContents(entry).then(contents => {
              const elements = csvToArray(contents);
              const publications = elements
                .slice(1, elements.length - 1)
                .map(elem => ({
                  name: elem[0],
                  date: moment(elem[1]).format('YYYY-MM-DD'),
                  description: elem[2],
                  publisher: elem[3],
                  url: elem[4]
                }));
              linkedinToJsonResume.processPublications(
                publications.sort((p1, p2) => -p1.date.localeCompare(p2.date))
              );
              return;
            });

          default:
            return Promise.resolve([]);
        }
      });

      Promise.all(promises).then(() => {
        if (window.ga) {
          window.ga(
            'send',
            'event',
            'linkedin-to-json-resume',
            'file-parsed-success'
          );
        }
        filedrag.innerHTML =
          'Dropped! See the resulting JSON Resume at the bottom.';
        const output = document.getElementById('output');
        output.innerHTML = JSON.stringify(
          linkedinToJsonResume.getOutput(),
          undefined,
          2
        );
        document.getElementById('input-firstname').value = linkedinToJsonResume.target['basics']['firstName'];
        document.getElementById('input-lastname').value = linkedinToJsonResume.target['basics']['lastName'];
        document.getElementById('input-label').value = linkedinToJsonResume.target['basics']['label'];
        document.getElementById('input-email').value = linkedinToJsonResume.target['basics']['email'];
        document.getElementById('input-phone').value = linkedinToJsonResume.target['basics']['phone'];
        linkedinToJsonResume.getWorkExperienceTable(this);
        linkedinToJsonResume.getLanguages();
        linkedinToJsonResume.getSkills();
        linkedinToJsonResume.getEducation();
        linkedinToJsonResume.getCertifications();
        window.Prism.highlightElement(output);
        downloadButton.style.display = 'block';
        document.getElementById('result').style.display = 'block';
      });
    });
  });
}

// file select
fileselect.addEventListener('change', fileSelectHandler, false);

const xhr = new XMLHttpRequest();
if (xhr.upload) {
  // file drop
  filedrag.addEventListener('dragover', fileDragHover, false);
  filedrag.addEventListener('dragleave', fileDragHover, false);
  filedrag.addEventListener('drop', fileSelectHandler, false);
  filedrag.style.display = 'block';
} else {
  filedrag.style.display = 'none';
}

document.getElementById('select-file').addEventListener('click', () => {
  fileselect.click();
});
