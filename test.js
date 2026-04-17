fetch('http://localhost:5000/api/feedback', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'System Test', rating: 5, review: 'Works' })
})
.then(r => r.text())
.then(text => console.log('Response:', text))
.catch(err => console.error('Error:', err));
