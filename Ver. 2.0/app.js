// app.js

document.addEventListener('DOMContentLoaded', function() {
  var scrollLinks = document.querySelectorAll('.smooth-scroll, .scroll-arrow');

  scrollLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var targetId = this.getAttribute('href');
      var targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });

      // Toggle the animation class
      this.classList.toggle('animate');
    });
  });
});

const teamMembersContainer = document.querySelector('.team-members');

function duplicateTeamMembers() {
  const teamMembers = document.querySelectorAll('.team-member');
  teamMembers.forEach((member) => {
    const clone = member.cloneNode(true);
    teamMembersContainer.appendChild(clone);
  });
}

duplicateTeamMembers();



