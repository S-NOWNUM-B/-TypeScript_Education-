// ===== функция на JS которую нужно типизировать =====

//async function getFaqs(req) {
//   const res = await fetch('/faqs', {
//      method: 'POST',
//      body: JSON.stringify(req)
//   });
//   const data = await res.json();
//   return data;
//}

enum QuestionStatus {
	Published = 'published',
	Draft = 'draft',
	Deleted = 'deleted'
}

async function getFaqs(req: {
	topicId: number;
	status: QuestionStatus;
}): Promise<{
	questionId: string;
	answer: string;
	tags: string[];
	likes: number;
	status: QuestionStatus;
}[]> {
	const res = await fetch('/faqs', {
		method: 'POST',
		body: JSON.stringify(req)
	});
	const data = await res.json();
	return data;
}