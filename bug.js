```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render, including the initial render.
    console.log('Count:', count);
    return () => {
      // Cleanup function (optional).  This is where you would handle any cleanup tasks such as unsubscribing from events.
      console.log('Cleanup!');
    };
  }, [count]); // The empty dependency array means this only runs once, after mounting. 

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```