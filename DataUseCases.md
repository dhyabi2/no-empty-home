# Data Use Cases and Scenarios for App Testing

| ID | Use Case | Data Flow | Components | Description | Status | Completion (%) |
|----|----------|-----------|------------|-------------|--------|----------------|
| 1 | User Registration | User Input -> AuthContext | Login, AuthContext | New user registers, creating a profile | Not Done | 0% |
| 2 | User Login | AuthContext -> App Components | Login, AuthContext, Index | User logs in, AuthContext updates | Not Done | 0% |
| 3 | Viewing Reward Points | AuthContext -> RewardOverview | Index, RewardOverview | User checks current reward points | Not Done | 0% |
| 4 | Earning Points from Purchase | RewardAndScanSystem -> AuthContext | RewardAndScanSystem, AuthContext, RewardOverview | User makes a purchase, points added | Not Done | 0% |
| 5 | Redeeming Rewards | RedeemPoints -> AuthContext | RedeemPoints, AuthContext, RewardOverview | User redeems points for a reward | Not Done | 0% |
| 6-200 | Various Use Cases | Multiple Data Flows | Multiple Components | Covering user interactions, reward systems, shop management, offer management, and special features | Not Done | 0% |

Note: Use cases 6-200 cover a wide range of functionalities including nearby shops, offer management, wishlist features, point transfers, reward customization, flash sales, and more. Each use case involves specific data flows between relevant components. All use cases are currently marked as "Not Done" with 0% completion.
