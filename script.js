// Questions data loaded from the markdown file
const questions = [
  "你真的爱自己吗？接纳自己存在缺点，同时愿意聚焦优点，并将其不断打磨和放大吗？",
  "你能做到当你感到不舒服的时候，先不反思和自责，而是试着评估对方对待你的方式，以及关系是否适合自己吗？",
  "你是否相信自己生来具备足够的能量和一定的能力，有自己的特点和特长，并愿意用余生发现和探索自己？",
  "你是否愿意思考每个问题的本质，不停留在表面的浅尝辄止，去寻找各种资料、资源和支持系统展开思考，探索问题的根本，找寻底层逻辑？",
  "你是否愿意直面你的情绪起伏，了解情绪管理的方法，主动觉察、记录、寻找规律，或者借助咨询师的帮助，对你的喜怒哀乐，特别是负面情绪进行科学分析和无条件的关怀？",
  "你是否能在面对权威（父母、老师、领导、长辈、名人）时，不是第一时间全然臣服，而是保持敏锐和审慎，接受对你有利的信息，排除你觉得无用或者不适的信息？",
  "你是否能果断拒绝他人（指任何人，包括亲人）对你的冒犯、侵扰、欺侮，并能及时远离，不心存对方会改变的期待？",
  "你是否能独立地为自己做一个决定，冒着未知和不确定性的风险行动，并为结果负责，以及在发生不如意的状况时做到不抱怨？",
  "当你想要探索一个新领域、新爱好、新乐趣时，是否可以先不计结果，只去尝试和玩耍，投入其中，像孩子开启一个游乐项目一样，随心行动？",
  "当有人质疑、嘲笑你的想法，态度轻蔑时，你是否还能保持坚定、清醒，继续稳步推进手头的事情，独自前行？",
  "在自己犯错后，你能否做到不责备、不攻击自己，只是看见事实，分析原因，总结经验教训，然后成长？",
  "你是否能主动表达出对别人的欣赏、赞美、爱，并且不觉得羞耻和难为情？",
  "你是否能独自做一些让自己快乐、自在的事情？从不觉得独自待着是一件奇怪的事情，可以很自然地独处？",
  "在关系发生冲突和矛盾的时候，你是否可以做到不使用极端词语攻击对方，在双方冷静后，寻找沟通的机会？在冲突中，发现自己的不合理期待和某些弱点后，你是否可以成熟地理解、消化、整合认知系统，升级自己对关系的理解？",
  "你是否可以在一段关系结束以后，不急着挽留或纠缠，只是安静地守护自己的心，聆听自己的痛苦和哀伤，看见情绪背后的意义，然后产生内在力量？",
  "你是否允许自己有无力、脆弱、羞耻、痛苦的时刻，并且不急着驱赶这些感受，与自己的这些感受静静共处，去聆听、安抚自己？你是否可以对自己所谓的糟糕的一面，保持接纳和尊重？",
  "当做不到某件事时，你是否可以不责备、不怀疑自己？你是否会停下来看一看，这件事是不是不适合自己？",
  "在你心中，心灵的共鸣、契合、贴近、支持，是否比地缘关系和血缘关系更重要？",
  "你是否可以在自己疲惫、虚弱、无力的时候，让自己停下来，充分休息、放空？不着急、催促、赶时间？",
  "你是否可以把'自我成长、自我探索、体验人生、实现潜能'当作目标，而不仅仅以'结婚、生子'为目标？你的人生是否可以以'自我'为出发点？",
  "你是否可以把金钱当作购买物资的兑换凭证，以及玩人生游戏的储值金币，除了这两个功能，不再赋予它过度的自我价值证明，不再使其与你的自尊、人格、人生意义关联在一起？",
  "你是否可以在物质不宽裕的时候，不轻视自己，不贬低自己，而是踏实生活、沉静学习、观察市场、了解需求、推进目标、耐心等待，不骄不躁，储备足够强大的能量？",
  "你是否可以做到不因买到贵的东西而觉得自己的价值被抬升，也不因为用便宜的东西而觉得自己的价值被贬低？是否可以保持'万物皆可为自己所用，万物都只是自己的装饰'的信念？",
  "你是否可以认同且肯定自己的认知、思维、情感、想象力，并落落大方、不卑不亢地说出对世界和事物的理解，清晰地表达自己的观点，坚持独立思考，并把这些当作你最珍贵的宝物？",
  "你是否可以坦然面对嘲讽、奚落、不公？你是否能看见这个世界纷至沓来的'标签'以及人们对你的评判，是否能理解这些，但绝不附庸，清醒地活着，让自己保持完整、纯粹？",
  "你是否可以不再抵触、对抗、逃避，尝试在'负能量''低能量'里分析和觉察，发现新信息，推动自己的认知进步，把思维的视野范围扩大再扩大？",
  "你是否可以在自我与他人、与群体的关系中找到平衡点，让自我独立，同时学会与人沟通、相处、合作，让自我有生长的土壤？",
  "你是否能把亲密关系当作课题、当作镜子、当作体验、当作成长，而不是当作归宿、港湾？你是否既可以在安定和依恋里被滋养，同时也可以在不定和无常中成长？",
  "你是否可以在某些费力、不舒服、需要妥协的时候，接受、忍受，不对抗和抱怨这样的现实，但绝不放弃'不费力法则'，一直寻找机会，争取早日脱困？",
  "你是否能做到终身爱自己，即第一，爱护、养育、支持自己；第二，了解、探索自己；第三，把人生当作一段自我实现的旅程？"
];

// Fix the issue with question 18-19 in the original document
if (questions[18].includes("在你心中，心灵的共鸣、契合、贴近、支持，是否比地缘关系和血缘关系更重要？19")) {
  const fixedQuestions = questions[18].split("19");
  questions[18] = fixedQuestions[0].trim();
  questions.splice(19, 0, "19 " + fixedQuestions[1].trim());
}

let currentQuestionIndex = 0;
let answers = Array(questions.length).fill('');

// DOM elements
const questionContainer = document.getElementById('questionContainer');
const startScreen = document.getElementById('startScreen');
const startButton = document.getElementById('startButton');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const saveBtn = document.getElementById('saveBtn');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const summaryContainer = document.getElementById('summaryContainer');
const summaryContent = document.getElementById('summaryContent');
const resetBtn = document.getElementById('resetBtn');

// Initialize the application
function init() {
  loadAnswersFromStorage();

  // Hide navigation buttons initially
  prevBtn.style.display = 'none';
  nextBtn.style.display = 'none';
  saveBtn.style.display = 'none';

  // Start button event
  startButton.addEventListener('click', () => {
    startScreen.style.display = 'none';
    prevBtn.style.display = 'block';
    nextBtn.style.display = 'block';
    saveBtn.style.display = 'block';
    showQuestion(currentQuestionIndex);
  });

  // Navigation button events
  prevBtn.addEventListener('click', showPreviousQuestion);
  nextBtn.addEventListener('click', showNextQuestion);
  saveBtn.addEventListener('click', saveProgress);

  // Summary buttons
  resetBtn.addEventListener('click', resetQuestions);

  // Check if we have answers already
  if (hasStoredAnswers()) {
    const continueButton = document.createElement('button');
    continueButton.textContent = '继续上次进度';
    continueButton.className = 'btn btn-secondary';
    continueButton.style.marginLeft = '10px';
    continueButton.addEventListener('click', () => {
      startScreen.style.display = 'none';
      prevBtn.style.display = 'block';
      nextBtn.style.display = 'block';
      saveBtn.style.display = 'block';

      // Find the last answered question
      const lastAnsweredIndex = findLastAnsweredQuestion();
      currentQuestionIndex = lastAnsweredIndex;
      showQuestion(currentQuestionIndex);
    });

    startButton.parentNode.insertBefore(continueButton, startButton.nextSibling);
  }
}

// Check if we have stored answers
function hasStoredAnswers() {
  const storedAnswers = localStorage.getItem('selfLoveAnswers');
  return storedAnswers && JSON.parse(storedAnswers).some(answer => answer.trim() !== '');
}

// Find the last question that has an answer
function findLastAnsweredQuestion() {
  for (let i = answers.length - 1; i >= 0; i--) {
    if (answers[i].trim() !== '') {
      return i;
    }
  }
  return 0;
}

// Display a specific question
function showQuestion(index) {
  // Clear the container
  if (startScreen.parentNode === questionContainer) {
    questionContainer.removeChild(startScreen);
  } else {
    questionContainer.innerHTML = '';
  }

  // Create question card
  const questionCard = document.createElement('div');
  questionCard.className = 'question-card';

  const questionNumber = document.createElement('span');
  questionNumber.className = 'question-number';
  questionNumber.textContent = `问题 ${index + 1}/30:`;

  const questionText = document.createElement('div');
  questionText.className = 'question-text';
  questionText.textContent = questions[index].replace(/^\d+\s+/, ''); // Remove any numbering from the beginning

  // Create yes/no radio buttons instead of textarea
  const answerOptions = document.createElement('div');
  answerOptions.className = 'answer-options';

  // Yes option
  const yesContainer = document.createElement('div');
  yesContainer.className = 'option-container';

  const yesInput = document.createElement('input');
  yesInput.type = 'radio';
  yesInput.id = `yes-${index}`;
  yesInput.name = `answer-${index}`;
  yesInput.value = '是';
  yesInput.checked = answers[index] === '是';
  // Add event listener to automatically proceed to next question
  yesInput.addEventListener('change', () => {
    if (yesInput.checked) {
      answers[index] = '是';
      saveAnswersToStorage();
      // Short delay before moving to next question for better UX
      setTimeout(() => {
        // Only advance if not on the last question
        if (currentQuestionIndex < questions.length - 1) {
          currentQuestionIndex++;
          showQuestion(currentQuestionIndex);
        } else {
          // If on the last question, show summary
          showSummary();
        }
      }, 300);
    }
  });

  const yesLabel = document.createElement('label');
  yesLabel.htmlFor = `yes-${index}`;
  yesLabel.textContent = '是';

  yesContainer.appendChild(yesInput);
  yesContainer.appendChild(yesLabel);

  // No option
  const noContainer = document.createElement('div');
  noContainer.className = 'option-container';

  const noInput = document.createElement('input');
  noInput.type = 'radio';
  noInput.id = `no-${index}`;
  noInput.name = `answer-${index}`;
  noInput.value = '否';
  noInput.checked = answers[index] === '否';
  // Add event listener to automatically proceed to next question
  noInput.addEventListener('change', () => {
    if (noInput.checked) {
      answers[index] = '否';
      saveAnswersToStorage();
      // Short delay before moving to next question for better UX
      setTimeout(() => {
        // Only advance if not on the last question
        if (currentQuestionIndex < questions.length - 1) {
          currentQuestionIndex++;
          showQuestion(currentQuestionIndex);
        } else {
          // If on the last question, show summary
          showSummary();
        }
      }, 300);
    }
  });

  const noLabel = document.createElement('label');
  noLabel.htmlFor = `no-${index}`;
  noLabel.textContent = '否';

  noContainer.appendChild(noInput);
  noContainer.appendChild(noLabel);

  // Add options to container
  answerOptions.appendChild(yesContainer);
  answerOptions.appendChild(noContainer);

  // Append elements
  questionCard.appendChild(questionNumber);
  questionCard.appendChild(questionText);
  questionCard.appendChild(answerOptions);
  questionContainer.appendChild(questionCard);

  // Update progress
  updateProgress();

  // Update navigation buttons
  prevBtn.disabled = index === 0;

  if (index === questions.length - 1) {
    nextBtn.innerHTML = '完成 <i class="fas fa-check"></i>';
  } else {
    nextBtn.innerHTML = '下一题 <i class="fas fa-arrow-right"></i>';
  }
}

// Show the previous question
function showPreviousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion(currentQuestionIndex);
  }
}

// Show the next question or complete
function showNextQuestion() {
  // Get the current answer (from radio buttons)
  const selectedRadio = document.querySelector(`input[name="answer-${currentQuestionIndex}"]:checked`);
  if (selectedRadio) {
    answers[currentQuestionIndex] = selectedRadio.value;
  } else {
    answers[currentQuestionIndex] = '';
  }

  if (currentQuestionIndex < questions.length - 1) {
    // Move to next question
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
  } else {
    // Show summary screen
    showSummary();
  }

  // Auto-save after each question
  saveAnswersToStorage();
}

// Update the progress bar
function updateProgress() {
  const answeredCount = answers.filter(answer => answer.trim() !== '').length;
  const progressPercent = (answeredCount / questions.length) * 100;
  progressBar.style.width = `${progressPercent}%`;
  progressText.textContent = `${answeredCount}/30`;
}

// Save answers to localStorage
function saveAnswersToStorage() {
  localStorage.setItem('selfLoveAnswers', JSON.stringify(answers));
}

// Load answers from localStorage
function loadAnswersFromStorage() {
  const storedAnswers = localStorage.getItem('selfLoveAnswers');
  if (storedAnswers) {
    answers = JSON.parse(storedAnswers);

    // Make sure we have 30 answer slots
    if (answers.length < questions.length) {
      answers = [...answers, ...Array(questions.length - answers.length).fill('')];
    }
  }
}

// Save progress button handler
function saveProgress() {
  // Get the current answer (from radio buttons)
  const selectedRadio = document.querySelector(`input[name="answer-${currentQuestionIndex}"]:checked`);
  if (selectedRadio) {
    answers[currentQuestionIndex] = selectedRadio.value;
  }

  saveAnswersToStorage();

  // Show a temporary save message
  const saveMsg = document.createElement('div');
  saveMsg.textContent = '已保存！';
  saveMsg.style.position = 'fixed';
  saveMsg.style.top = '20px';
  saveMsg.style.left = '50%';
  saveMsg.style.transform = 'translateX(-50%)';
  saveMsg.style.backgroundColor = '#4CAF50';
  saveMsg.style.color = 'white';
  saveMsg.style.padding = '10px 20px';
  saveMsg.style.borderRadius = '4px';
  saveMsg.style.zIndex = '1000';

  document.body.appendChild(saveMsg);

  // Remove the message after 2 seconds
  setTimeout(() => {
    document.body.removeChild(saveMsg);
  }, 2000);
}

// Show the summary screen
function showSummary() {
  // Hide question and navigation
  questionContainer.style.display = 'none';
  prevBtn.style.display = 'none';
  nextBtn.style.display = 'none';
  saveBtn.style.display = 'none';

  // Show summary
  summaryContainer.style.display = 'block';
  summaryContent.innerHTML = '';

  // Generate summary content
  let yesCount = 0;
  questions.forEach((question, index) => {
    if (answers[index].trim() === '') return;

    const summaryItem = document.createElement('div');
    summaryItem.className = 'summary-item';

    const summaryQuestion = document.createElement('div');
    summaryQuestion.className = 'summary-question';
    summaryQuestion.textContent = `问题 ${index + 1}: ${question.replace(/^\d+\s+/, '')}`;

    const summaryAnswer = document.createElement('div');
    summaryAnswer.className = 'summary-answer';
    if (answers[index] === '是') {
      summaryAnswer.textContent = '是';
      summaryAnswer.classList.add('answer-yes');
      yesCount++;
    } else {
      summaryAnswer.textContent = '否';
      summaryAnswer.classList.add('answer-no');
    }

    summaryItem.appendChild(summaryQuestion);
    summaryItem.appendChild(summaryAnswer);
    summaryContent.appendChild(summaryItem);
  });

  // Add summary statistics
  const answeredCount = answers.filter(answer => answer.trim() !== '').length;
  if (answeredCount > 0) {
    const statsContainer = document.createElement('div');
    statsContainer.className = 'summary-stats';

    const statsText = document.createElement('p');
    statsText.innerHTML = `<strong>总结:</strong> 你回答了 ${answeredCount} 个问题，其中 
            <span class="yes-count">${yesCount} 个"是"</span> 和 
            <span class="no-count">${answeredCount - yesCount} 个"否"</span>。`;
    statsContainer.appendChild(statsText);
    summaryContent.appendChild(statsContainer);
  } else {
    // If no answers
    const noAnswers = document.createElement('p');
    noAnswers.textContent = '你还没有回答任何问题。';
    noAnswers.style.textAlign = 'center';
    noAnswers.style.padding = '20px';
    summaryContent.appendChild(noAnswers);
  }
}


// Reset all questions and answers
function resetQuestions() {
  if (confirm('确定要重置所有答案吗？这将删除所有已保存的回答。')) {
    answers = Array(questions.length).fill('');
    localStorage.removeItem('selfLoveAnswers');

    // Go back to start screen
    summaryContainer.style.display = 'none';
    questionContainer.style.display = 'block';
    questionContainer.innerHTML = '';
    questionContainer.appendChild(startScreen);
    startScreen.style.display = 'block';

    currentQuestionIndex = 0;
    updateProgress();
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
