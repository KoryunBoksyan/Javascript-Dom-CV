function createElements(tagName , className, parentName, text = "", addBefore = false){
    let element = document.createElement(tagName);
    element.className = className;
    element.textContent = text;
    if (addBefore) {
      parentName.prepend(element);
    } else {
      parentName.append(element);
    }
    return element;
  }
  
const main = createElements('main', 'main_container', document.body, '', true);

const nav = createElements('nav', 'left_column', main, '', true);

const div_avatar = createElements('div', 'avatar', nav, '', true);

const h2 = createElements('h2', '', div_avatar, 'Jane Doe', true);

const span_icon1 = createElements('span', '', nav, '', true);
const br = createElements('br', '', nav, '', true);
const br3 = createElements('br', '', nav, '', true);

const span_icon2 = createElements('span', '', nav, '', true);
const br1 = createElements('br', '', nav, '', true);
const br2 = createElements('br', '', nav, '', true);

const span_icon3 = createElements('span', '', nav, '', true);
const br4 = createElements('br', '', nav, '', true);
const br5 = createElements('br', '', nav, '', true);

const span_icon4 = createElements('span', '', nav, '', true);
const hr = createElements('hr', '', nav, '', true);
const br6 = createElements('br', '', nav, '', true);
const br7 = createElements('br', '', nav, '', true);
const br8 = createElements('br', '', nav, '', true);

const avatar_icon_1 = createElements('i', 'fa fa-briefcase fa-fw', span_icon1, 'Designer', true);

const avatar_icon_2 = createElements('i', 'fa fa-home', span_icon2, 'London UK', true);

const avatar_icon_3 = createElements('i', 'fa fa-envelope fa-fw', span_icon3, 'ex@mail.com', true);

const avatar_icon_4 = createElements('i', 'fa fa-phone fa-fw', span_icon4, '1224435534', true);

const span_icon5 = createElements('span', 'icon_5', nav, '', true);

const avatar_icon_5 = createElements('i', 'fa fa-asterisk fa-fw', span_icon5, 'Skills', true);

const nav_p1 = createElements('p', '', nav, 'Adobe Photoshop', true);

const skill_div1 = createElements('div', 'percent', nav, '', true);

const skill_span1 = createElements('span', 'percent_value 100', skill_div1, '90%', true);
skill_span1.style = "width: 90%"

const nav_p2 = createElements('p', '', nav, 'Photography', true);

const skill_div2 = createElements('div', 'percent', nav, '', true);

const skill_span2 = createElements('span', 'percent_value 100', skill_div2, '80%', true);
skill_span2.style = "width: 80%"

const nav_p3 = createElements('p', '', nav, 'Illustrator', true);

const skill_div3 = createElements('div', 'percent', nav, '', true);

const skill_span3 = createElements('span', 'percent_value 100', skill_div3, '75%', true);
skill_span3.style = "width: 75%"

const nav_p4 = createElements('p', '', nav, 'Photography', true);

const skill_div4 = createElements('div', 'percent', nav, '', true);

const skill_span4 = createElements('span', 'percent_value 100', skill_div4, '75%', true);
skill_span4.style = "width: 75%"

const br9 = createElements('br', '', nav, '', true);

const hr1 = createElements('hr', '', nav, '', true);

const br10 = createElements('br', '', nav, '', true);

const span_icon10 = createElements('span', 'icon_5', nav, '', true);

const avatar_icon_10 = createElements('i', 'fa fa-asterisk fa-fw', span_icon10, 'LANGUAGES', true);

const nav_p5 = createElements('p', '', nav, 'English', true);

const skill_div5 = createElements('div', 'percent', nav, '', true);

const skill_span5 = createElements('span', 'percent_value lang', skill_div5, '90%', true);
skill_span5.style = "width: 90%"

const nav_p7 = createElements('p', '', nav, 'Spanish', true);

const skill_div7 = createElements('div', 'percent', nav, '', true);

const skill_span7 = createElements('span', 'percent_value lang', skill_div7, '75%', true);
skill_span7.style = "width: 75%"

const nav_p8 = createElements('p', '', nav, 'Germany', true);

const skill_div8 = createElements('div', 'percent', nav, '', true);

const skill_span8 = createElements('span', 'percent_value lang', skill_div8, '50%', true);
skill_span8.style = "width: 50%"

const section_1 = createElements('section', 'work_experience', main, '', true);

arr_h5 = ['Front End Developer / w3schools.com', 'Web Developer / something.com' , 'Graphic Designer / designsomething.com']
arr_b = ['Jan 2015', 'Mar 2012 - Dec 2014', 'Jun 2010 - Mar 2012']
arr_p = ['Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.', 'Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' ];

function section1ciklner(section, arr_h5, arr_b, arr_p){
  for (let i = 0; i < 3; i++) {
      const sect_div = document.createElement('div')
      
      const h5 = document.createElement('h5')
      sect_div.appendChild(h5)
      
      const h6 = document.createElement('h6')
      sect_div.appendChild(h6)

      const sect_b = document.createElement('b')
      h6.appendChild(sect_b)
      
      const sect_i = document.createElement('i')
      h6.appendChild(sect_i)

      
      
      const sect_p = document.createElement('p')
      sect_div.appendChild(sect_p)
      
      
      section.appendChild(sect_div)
      const br_sect = document.createElement('br')
      section.appendChild(br_sect)
      const hr_sect = document.createElement('hr')
      section.appendChild(hr_sect)

      sect_i.setAttribute('class',  'fa fa-calendar fa-fw')
      
      for (let j = i; j < arr_h5.length; j++) {
          
        h5.textContent = arr_h5[i]
          
      }

      for (let k = i; k < arr_b.length; k++) {
        sect_b.textContent = arr_b[i]
          
          
      }

      for (let z = i; z < arr_p.length; z++) {

          sect_p.textContent = arr_p[i]
          
      }
  }
}

section1ciklner(section_1, arr_h5, arr_b , arr_p )

const section_2 = createElements('section', 'education', main, '', true);

arr_sect2_h5 = ['W3Schools.com', 'London Business School' , 'School of Coding']
arr_sect2_b = ['JForever', '2013 - 2015', '2010 - 2013']
arr_sect2_p = ['Web Development! All I need to know in one place', 'Master Degree', 'Bachelor Degree' ];

section1ciklner(section_2, arr_sect2_h5, arr_sect2_b, arr_sect2_p)

// Footer
const footer = createElements('footer', 'footer', main, '', true);
const foot_div = createElements('div', '', footer, '', true);
const foot_p = createElements('p', '', foot_div, 'Find me on social media.', true);

for (let i = 0; i < 6; i++) {
    const foot_i = createElements('i', '', foot_div, '', true); 
}
const foot_p2 = createElements('p', '', foot_div, 'Powerd by', true);

const foot_a = createElements('a', '', foot_p2, 'W3.css', true);

