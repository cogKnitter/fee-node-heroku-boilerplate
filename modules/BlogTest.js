import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
      <h2>{this.props.params.blogName}</h2>
      <p>At the end of group week I am both excited and relieved. We achieved a great amount in a short timespan, but it was not without it's challenges. One of the greatest assets to our project was definitely Github. Github allowed our team to focus on individual features, making it possible to tackle the greater development goal one piece at a time. Each feature was worked on by one or more team members and then reviewed by a separate team member before it was assembled into the code base. Another benefit of Github is that it allows the person working on an individual feature to compare code before even opening a pull request, so bugs can be spotted fairly early on in the dev process. The biggest challenge with Github is that without careful communication the seemingly easy to use site can become cluttered with unanswered pull requests and extraneous branches.
      Regarding integrating the Front End and Back end teams, there were some obstacles, but we pulled through. The biggest challenge in the integration was working asynchronously. Front End and Back End don't usually happen at the same speed, so we eventually learned that the only way to achieve code integration is to have the matching points agreed upon in advance. This allows both sides to work on their respective aspects with the goal already lined out. The other challenge was vocabulary. When discussing how data would be shared, we had to make sure that we were talking about the same data structure and clearly define file paths.
      Our ending MVP was greatly scaled back from the original concept presented by the client. I do think that we could have achieved more, if our workflow and milestones had been better discussed before embarking on the project. We had to scale back once we realized that it was better to make smaller promises we could deliver, than to make large ones that weren't achievable with the limited resources and time. Revamping the MVP gave everyone on the team a burst of renewed hope and made it possible for us to acknowledge our successes.
</p>
      </div>
    )
  }
})
