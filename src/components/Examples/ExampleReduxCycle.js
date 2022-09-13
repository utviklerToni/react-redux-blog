// action creator, like person dropping off the FORM
const createPolicy = (name, amount) => {
   return {
      type: 'CREATE_POLICY',
      payload: { name, amount },
   };
};

const deletePolicy = (name) => {
   return {
      type: 'DELETE_POLICY',
      payload: { name },
   };
};

const createClaim = (name, moneyToCollect) => {
   return {
      type: 'CREATE_CLAIM',
      payload: {
         name,
         moneyToCollect,
      },
   };
};

// reducers (departments)

const claimHistory = (oldListOfClaims = [], action) => {
   // action is like a form
   // when called for the first time, oldListOfClaims should not be undefined, rather empty array
   if (action.type === 'CREATE_CLAIM') {
      // care about the FORM
      return [...oldListOfClaims, action.payload];
   }

   return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
   if (action.type === 'CREATE_CLAIM') {
      return bagOfMoney - action.payload.moneyToCollect;
   } else if (action.type === 'CREATE_POLICY') {
      return bagOfMoney + action.payload.amount;
   }

   return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {
   if (action.type === 'CRATE_POLICY') {
      return [...listOfPolicies, action.payload.name];
   } else if (action.type === 'DELETE_pOLICY') {
      return listOfPolicies.filter((name) => name !== action.payload.name);
   }

   return listOfPolicies;
};

const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
   accounting: accounting,
   claimHistory: claimHistory,
   policies: policies,
});

const store = createStore(ourDepartments); // represents our entire redux app

// const action = createPolicy('Alex', 27);
// store.dispatch(action); // like form receiver

store.dispatch(createPolicy('Alex', 27));
store.dispatch(createPolicy('Jimmy', 87));
store.dispatch(createPolicy('Erik', 99));

store.getState(); // gets all the info from all the department
