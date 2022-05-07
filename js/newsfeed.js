// Menu Functions
import { isElement, writeById, createLink, getFilename, urlExists, getBase, createLMNT, appendNestLMNT, appendLMNT } from './utilities.js';

const newsFeed202202spring = [
    {
        "url": "https://threatpost.com/dns-bug-millions-routers-iot-risk/179478/",
        "title": "Unpatched DNS Bug Puts Millions of Routers, IoT Devices at Risk",
        "desc": "In a DNS poisoning attack– also known as DNS spoofing and DNS cache poisoning–an attacker deceives a DNS client into accepting a forged response. This forces a program to perform network communications with an arbitrarily defined endpoint instead of the legitimate one.",
        "week": "03",
        "sort": "2022-05-02",
        "date": "02 May 2022",
        "accessed": "05 May 2022",
        "img": "DNS-Attack.jpg"
    },
    {
        "url": "https://threatpost.com/bad-actors-remote-everything/179458/",
        "title": "Bad Actors Are Maximizing Remote Everything",
        "desc": "As hybrid work and learning become embedded paradigms in our culture, there are fewer layers of protection between malware and would-be victims. And bad actors are gaining access to more tools to help them pull off their nefarious deeds – like exploit kits. At the same time, the attack surface has rapidly expanded and continues to do so.",
        "week": "03",
        "sort": "2022-05-02",
        "date": "05/02/2022",
        "accessed": "05 May 2022",
        "img": "Work-from-Home-WFH.jpg"
    },
    {
        "url": "https://www.cnet.com/tech/services-and-software/best-password-manager/",
        "title": "Best Password Manager to Use for 2022",
        "desc": "A password manager is essentially an encrypted digital vault that stores secure password login information you use to access apps and accounts on your mobile device, websites and other services. Image by <a href='https://unsplash.com/@moneyphotos'>olieman.eth on Unsplash.com</a>",
        "week": "03",
        "sort": "2022-05-02",
        "date": "05 May 2022",
        "accessed": "05 May 2022",
        "img": "olieman-eth-q7h8LVeUgFU-unsplash.jpg"
    },
    {
        "url": "https://threatpost.com/the-future-of-executive-protection-is-digital/179469/",
        "title": "The Future of Executive Protection is Digital",
        "desc": "...it’s no longer enough to surround executives with physical guardrails and James Bond-like security detail. Companies spend millions to protect executives’ physical security and their digital lives at work, but they won’t truly be safe unless they are protected in their personal digital lives, as well. Image by <a href='https://unsplash.com/@robsarm'>Rob Sarmiento on Unsplash.com</a>",
        "week": "03",
        "sort": "2022-05-02",
        "date": "04 May 2022",
        "accessed": "05 May 2022",
        "img": "rob-sarmiento-MZnuRv1ZASk-unsplash.jpg"
    },
    {
        "url": "https://www.cnbc.com/video/2022/05/04/cybersecurity-firm-cybereason-uncovers-chinese-espionage-campaign.html",
        "title": "Cybersecurity firm Cybereason uncovers Chinese espionage campaign",
        "desc": "Video: A top cybersecurity company is pulling back the curtain on a hacking campaign aimed at stealing American intellectual property. CNBC’s Eamon Javers joins ‘Squawk Box’ with the details. Image by <a href='https://unsplash.com/@laughayette'>Marten Newhall on Unsplash.com</a>",
        "week": "03",
        "sort": "2022-05-04",
        "date": "04 May 2022",
        "accessed": "06 May 2022",
        "img": "marten-newhall-uAFjFsMS3YY-unsplash.jpg"
    },
    {
        "url": "https://www.zdnet.com/article/a-security-researcher-told-me-my-passwords-and-more-how-15-years-of-digital-footprints-left-me-exposed/",
        "title": "A security researcher easily found my passwords and more:",
        "desc": "How my digital footprints left me surprisingly over-exposed...as I discovered, old information can come back to haunt you. I'm careful with what I sign-up to, what I post, and who can see it. I make sure that my passwords are complex enough so they can't be guessed, plus whenever possible, I use multi-factor authentication to protect my accounts. These are all habits I've developed during the past 10 years or so. Author: <a href='https://www.zdnet.com/meet-the-team/uk/dannypalmerzdnet/'>Danny Palmer</a>",
        "week": "03",
        "sort": "2022-05-02",
        "date": "02 May 2022",
        "accessed": "06 May 2022",
        "img": "dp-zdnet-headshot-feb-20201.webp"
    },
    {
        "url": "https://threatpost.com/container_threats_cloud_defend/179452/",
        "title": "Deep Dive: Protecting Against Container Threats in the Cloud",
        "desc": "Akamai security researcher Larry Cashdollar recently set up a simple Docker container honeypot, just to see what kind of notice it might attract from the wider web’s cadre of cyberattackers. The results were head-turning: The honeypot was used for four different criminal campaigns in the span of 24 hours. Author: <a href='link'>name</a>",
        "week": "03",
        "sort": "2022-05-02",
        "date": "02 May 2022",
        "accessed": "06 May 2022",
        "img": "AdobeStock_50048132.jpeg"
    },
    {
        "url": "https://www.securityweek.com/heroku-shares-details-recent-github-attack",
        "title": "Heroku Shares Details on Recent GitHub Attack",
        "desc": "Platform-as-a-service company Heroku this week shared additional details on an April cyberattack that resulted in unauthorized access to multiple customers’ GitHub repositories. Author: <a href='https://www.securityweek.com/authors/ionut-arghire'>Ionut Arghire</a>",
        "week": "03",
        "sort": "2022-05-06",
        "date": "06 May 2022",
        "accessed": "06 May 2022",
        "img": "1461122387heroku-logo.webp"
    },
    {
        "url": "https://imgs.xkcd.com/comics/exploits_of_a_mom.png",
        "title": "BOBBY TABLES",
        "desc": "...learn to sanitize database inputs",
        "week": "03",
        "sort": "2022-05-02",
        "date": "05 May 2022",
        "accessed": "05 May 2022",
        "img": "BobbyTables.png"
    },
    {
        "url": "https://tryhackme.com/room/owasptop10",
        "title": "OWASP Top 10",
        "desc": "Learn about and exploit each of the OWASP Top 10 vulnerabilities; the 10 most critical web security risks.",
        "week": "03",
        "sort": "2022-05-05",
        "date": "05 May 2022",
        "accessed": "05 May 2022",
        "img": "sP6d0iZ.png"
    },
    {
        "url": "https://tryhackme.com/room/sqlinjectionlm",
        "title": "SQL Injection",
        "desc": "Learn how to detect and exploit SQL Injection vulnerabilities",
        "week": "03",
        "sort": "2022-05-05",
        "date": "05 May 2022",
        "accessed": "05 May 2022",
        "img": "03376575e888fd097280c51469c29fbc.png"
    },
    {
        "url": "https://threatmap.checkpoint.com/",
        "title": "Live Cyber Threat Map",
        "desc": "Shows cyber attacks around the world in real time",
        "date": "02 May 2022",
        "week": "03",
        "sort": "2022-05-06",
        "accessed": "06 May 2022",
        "img": "live-attacks.png"
    }
];

function createNav(array, id) {
    // create link list container element
    if (isElement(id)) {
      const container = document.getElementById(id);
      // sort array by name
      array.sort(function(a, b) {
        var nameA = a.week + a.sort + a.title; // make non-case-sensitive
        var nameB = b.week + b.sort + a.title; // make non-case-sensitive
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
      // create link list element
      let menu = '<div id="newsfeed-container">';
      // get list of files to create links for each menu entry
      array.forEach((element) => {
            // TODO: save as variable for adding to index.html page as parameter? (${element.tech})
            menu += `<div class="flipcard">`;
            menu += `<div class="flipcard-inner">`;
            menu += `<div class="flipcard-front">`;
            menu += `<img src="./img/${element.img}" alt="${element.title}">`;
            menu += `</div>`;
            menu += `<div class="flipcard-back">`;
            menu += `<h4><a href="${element.url}">${element.title}</a></h4>`;
            menu += `<p>Article Date: ${element.date}, Accessed: ${element.accessed}</p>`;
            menu += `<p class="desc">"${element.desc}"</p>`;
            menu += `</div> </div> </div> `;
      });
      menu += "</div>";
      container.innerHTML = menu;
      return;
    }
}
createNav(newsFeed202202spring,'newsfeed');
