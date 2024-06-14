function bestCandidate(k) {
    var bestScore = 0,
        bestCandidate;
  
    // Generate k random candidates.
    for (var i = 0; i < k; ++i) {
      var c = randomCandidate();
  
      // Determine if the current candidate is the new best.
      var s = score(c);
      if (s > bestScore) {
        bestScore = s;
        bestCandidate = c;
      }
    }
  
    return bestCandidate;
  }