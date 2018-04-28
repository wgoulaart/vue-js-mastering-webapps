# Star Wars Caracters Master

### Challenges to Implementation

1.  Add a back button which allows the user to revert their last switch character. That way, they can save a character they may have liked that they accidentally skipped over.

2.  Keep a history of all the characters that the user generates in the lifespan of the application.

**Tips:**  
  - Use key in v-for, to index position on list performace and fix   warning log  

  **Code:**
  ```javascript
  <Person
       v-for="(id, index) in initial_ids"
       :id="id"
       :key="index"
    />
  ```
