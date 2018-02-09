const questions = [
  'You enjoy trying all types of food',
  'You enjoy binging the best new television shows',
  'You like to go running/biking outside',
  'You like tex-mex food',
  'You enjoy being social with others',
  'You also enjoy having alone time with yourself',
  'You like to study/work at coffee shops',
  'You love animals including reptiles',
  'Getting to travel to other countries sounds appealing',
  'You enjoing working hard and well as enjoying your time off',
  'You like to read a good book',
  'You believe friends can be made online through surveys like this'
];

const showMatch = function(match) {
  console.log(match);
  $('#match-modal')
    .html(
      `
      <div class="modal">
        <h3>Your match:</h3>
        <p class="match-name">${match.name}</p>
        <div class="match-img">
          <img src="${match.img}"/>
        </div>
      </div>
  `
    )
    .show();
};

questions.map(question => {
  $('.quiz').prepend(`
    <div class="center">
      <h3 class="center">${question}</h3>
        <div class="option">
          <select class="form-control" id="q1">
            <option disabled selected value> -- Select an Option -- </option>
            <option value="0">Strongly Disagree</option>
            <option value="1">Disagree</option>
            <option value="2">Neutral</option>
            <option value="3">Agree</option>
            <option value="4">Strongly Agree</option>
          </select>
        </div>
      </div>
    </div>
  `);
});
$('.quiz').prepend(`
  <div class="center">
    <label>Name:</label> <input type="text" name="name" required/><br />
    <label>Photo:</label> <input type="text" name="photo" required/>
  </div>
`);

$('.quiz').on('submit', function(e) {
  e.preventDefault();
  const friendData = $(this).serializeArray();
  $.post('/api/friends.js', friendsArray).done(res => showMatch(res));
});
$(window).click(function(e) {
  const modal = document.getElementById('match-modal');
  if (e.target === modal) {
    $('#match-modal').hide();
  }
});
