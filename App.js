import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const flashcards = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "Who developed the theory of relativity?", answer: "Albert Einstein" },
    { question: "What is the largest planet?", answer: "Jupiter" }
  ];

  const nextCard = () => {
    setShowAnswer(false);
    setIndex((index + 1) % flashcards.length);
  };

  const prevCard = () => {
    setShowAnswer(false);
    setIndex((index - 1 + flashcards.length) % flashcards.length);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flashcard Quiz</Text>
      <View style={styles.card}>
        <Text style={styles.text}>
          {showAnswer ? flashcards[index].answer : flashcards[index].question}
        </Text>
      </View>
      <View style={styles.buttonRow}>
        <Button title="Previous" onPress={prevCard} />
        <Button title={showAnswer ? "Show Question" : "Show Answer"} onPress={() => setShowAnswer(!showAnswer)} />
        <Button title="Next" onPress={nextCard} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f2f2f2' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  card: { backgroundColor: '#fff', padding: 30, borderRadius: 10, elevation: 3 },
  text: { fontSize: 20, textAlign: 'center' },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, width: '80%' }
});