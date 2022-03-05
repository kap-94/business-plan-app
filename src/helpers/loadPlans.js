import { db } from "../firebase/firebase";

export const loadPlans = async (uid) => {
  const plansSnap = await db.collection(`${uid}/data/plans`).get();
  const plans = [];

  plansSnap.forEach((snap) =>
    plans.push({
      id: snap.id,
      ...snap.data(),
    })
  );

  return plans;
};
