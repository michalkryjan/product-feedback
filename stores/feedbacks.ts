export const useFeedbacksStore = defineStore('feedbacks', () => {
  const feedbacks = ref<Feedback[]>([])

  function addFeedback (data: Pick<Feedback, 'title' | 'category' | 'description'>): void {
    feedbacks.value.push({
      id: 0,
      title: data.title,
      category: data.category,
      upvotes: 0,
      status: {
        id: 1,
        order: 1,
        name: 'suggestion',
        color: ''
      },
      description: data.description
    })
  }

  function fetchFeedbacks (): boolean {
    feedbacks.value = [
      {
        id: 1,
        title: 'Add tags for solutions',
        category: {
          id: 1,
          name: 'enhancement'
        },
        upvotes: 112,
        status: {
          id: 1,
          order: 1,
          name: 'suggestion',
          color: ''
        },
        description: 'Easier to search for solutions based on a specific stack.',
        comments: [
          {
            id: 1,
            content: 'Awesome idea! Trying to find framework-specific projects within the hubs can be tedious',
            user: {
              image: '/users/image-suzanne.jpg',
              name: 'Suzanne Chang',
              username: 'upbeat1811'
            }
          },
          {
            id: 2,
            content: 'Please use fun, color-coded labels to easily identify them at a glance',
            user: {
              image: '/users/image-thomas.jpg',
              name: 'Thomas Hood',
              username: 'brawnybrave'
            }
          }
        ]
      },
      {
        id: 2,
        title: 'Add a dark theme option',
        category: {
          id: 2,
          name: 'feature'
        },
        upvotes: 99,
        status: {
          id: 1,
          order: 1,
          name: 'suggestion',
          color: ''
        },
        description: 'It would help people with light sensitivities and who prefer dark mode.',
        comments: [
          {
            id: 3,
            content: 'Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.',
            user: {
              image: '/users/image-elijah.jpg',
              name: 'Elijah Moss',
              username: 'hexagon.bestagon'
            }
          },
          {
            id: 4,
            content: 'Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and  apparently saves battery life.',
            user: {
              image: '/users/image-james.jpg',
              name: 'James Skinner',
              username: 'hummingbird1'
            },
            replies: [
              {
                content: 'While waiting for dark mode, there are browser extensions that will also do the job. Search for \'dark theme\' followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.',
                replyingTo: 'hummingbird1',
                user: {
                  image: '/users/image-anne.jpg',
                  name: 'Anne Valentine',
                  username: 'annev1990'
                }
              },
              {
                content: 'Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I\'d prefer not to use one of such extensions, however, for security and privacy reasons.',
                replyingTo: 'annev1990',
                user: {
                  image: '/users/image-ryan.jpg',
                  name: 'Ryan Welles',
                  username: 'voyager.344'
                }
              }
            ]
          }
        ]
      },
      {
        id: 3,
        title: 'Q&A within the challenge hubs',
        category: {
          id: 2,
          name: 'feature'
        },
        upvotes: 65,
        status: {
          id: 1,
          order: 1,
          name: 'suggestion',
          color: ''
        },
        description: 'Challenge-specific Q&A would make for easy reference.',
        comments: [
          {
            id: 5,
            content: 'Much easier to get answers from devs who can relate, since they\'ve either finished the challenge themselves or are in the middle of it.',
            user: {
              image: '/users/image-george.jpg',
              name: 'George Partridge',
              username: 'soccerviewer8'
            }
          }
        ]
      },
      {
        id: 4,
        title: 'Add image/video upload to feedback',
        category: {
          id: 1,
          name: 'enhancement'
        },
        upvotes: 51,
        status: {
          id: 1,
          order: 1,
          name: 'suggestion',
          color: ''
        },
        description: 'Images and screencasts can enhance comments on solutions.',
        comments: [
          {
            id: 6,
            content: 'Right now, there is no ability to add images while giving feedback which isn\'t ideal because I have to use another app to show what I mean',
            user: {
              image: '/users/image-javier.jpg',
              name: 'Javier Pollard',
              username: 'warlikeduke'
            }
          },
          {
            id: 7,
            content: 'Yes I\'d like to see this as well. Sometimes I want to add a short video or gif to explain the site\'s behavior..',
            user: {
              image: '/users/image-roxanne.jpg',
              name: 'Roxanne Travis',
              username: 'peppersprime32'
            }
          }
        ]
      },
      {
        id: 5,
        title: 'Ability to follow others',
        category: {
          id: 2,
          name: 'feature'
        },
        upvotes: 42,
        status: {
          id: 1,
          order: 1,
          name: 'suggestion',
          color: ''
        },
        description: 'Stay updated on comments and solutions other people post.',
        comments: [
          {
            id: 8,
            content: 'I also want to be notified when devs I follow submit projects on FEM. Is in-app notification also in the pipeline?',
            user: {
              image: '/users/image-victoria.jpg',
              name: 'Victoria Mejia',
              username: 'arlen_the_marlin'
            },
            replies: [
              {
                content: 'Bumping this. It would be good to have a tab with a feed of people I follow so it\'s easy to see what challenges they’ve done lately. I learn a lot by reading good developers\' code.',
                replyingTo: 'arlen_the_marlin',
                user: {
                  image: '/users/image-zena.jpg',
                  name: 'Zena Kelley',
                  username: 'velvetround'
                }
              }
            ]
          },
          {
            id: 9,
            content: 'I\'ve been saving the profile URLs of a few people and I check what they’ve been doing from time to time. Being able to follow them solves that',
            user: {
              image: '/users/image-jackson.jpg',
              name: 'Jackson Barker',
              username: 'countryspirit'
            }
          }
        ]
      },
      {
        id: 6,
        title: 'Preview images not loading',
        category: {
          id: 3,
          name: 'bug'
        },
        upvotes: 3,
        status: {
          id: 1,
          order: 1,
          name: 'suggestion',
          color: ''
        },
        description: 'Challenge preview images are missing when you apply a filter.'
      },
      {
        id: 7,
        title: 'More comprehensive reports',
        category: {
          id: 2,
          name: 'feature'
        },
        upvotes: 123,
        status: {
          id: 2,
          order: 2,
          name: 'planned',
          color: ''
        },
        description: 'It would be great to see a more detailed breakdown of solutions.',
        comments: [
          {
            id: 10,
            content: 'This would be awesome! It would be so helpful to see an overview of my code in a way that makes it easy to spot where things could be improved.',
            user: {
              image: '/users/image-victoria.jpg',
              name: 'Victoria Mejia',
              username: 'arlen_the_marlin'
            }
          },
          {
            id: 11,
            content: 'Yeah, this would be really good. I\'d love to see deeper insights into my code!',
            user: {
              image: '/users/image-jackson.jpg',
              name: 'Jackson Barker',
              username: 'countryspirit'
            }
          }
        ]
      },
      {
        id: 8,
        title: 'Learning paths',
        category: {
          id: 2,
          name: 'feature'
        },
        upvotes: 28,
        status: {
          id: 2,
          order: 2,
          name: 'planned',
          color: ''
        },
        description: 'Sequenced projects for different goals to help people improve.',
        comments: [
          {
            id: 12,
            content: 'Having a path through the challenges that I could follow would be brilliant! Sometimes I\'m not sure which challenge would be the best next step to take. So this would help me navigate through them!',
            user: {
              image: '/users/image-george.jpg',
              name: 'George Partridge',
              username: 'soccerviewer8'
            }
          }
        ]
      },
      {
        id: 9,
        title: 'One-click portfolio generation',
        category: {
          id: 2,
          name: 'feature'
        },
        upvotes: 62,
        status: {
          id: 3,
          order: 3,
          name: 'in-progress',
          color: ''
        },
        description: 'Add ability to create professional looking portfolio from profile.',
        comments: [
          {
            id: 13,
            content: 'I haven\'t built a portfolio site yet, so this would be really helpful. Might it also be possible to choose layout and colour themes?!',
            user: {
              image: '/users/image-ryan.jpg',
              name: 'Ryan Welles',
              username: 'voyager.344'
            }
          }
        ]
      },
      {
        id: 10,
        title: 'Bookmark challenges',
        category: {
          id: 2,
          name: 'feature'
        },
        upvotes: 31,
        status: {
          id: 3,
          order: 3,
          name: 'in-progress',
          color: ''
        },
        description: 'Be able to bookmark challenges to take later on.',
        comments: [
          {
            id: 14,
            content: 'This would be great! At the moment, I\'m just starting challenges in order to save them. But this means the My Challenges section is overflowing with projects and is hard to manage. Being able to bookmark challenges would be really helpful.',
            user: {
              image: '/users/image-suzanne.jpg',
              name: 'Suzanne Chang',
              username: 'upbeat1811'
            }
          }
        ]
      },
      {
        id: 11,
        title: 'Animated solution screenshots',
        category: {
          id: 3,
          name: 'bug'
        },
        upvotes: 9,
        status: {
          id: 3,
          order: 3,
          name: 'in-progress',
          color: ''
        },
        description: 'Screenshots of solutions with animations don’t display correctly.'
      },
      {
        id: 12,
        title: 'Add micro-interactions',
        category: {
          id: 1,
          name: 'enhancement'
        },
        upvotes: 71,
        status: {
          id: 4,
          order: 4,
          name: 'live',
          color: ''
        },
        description: 'Small animations at specific points can add delight.',
        comments: [
          {
            id: 15,
            content: 'I\'d love to see this! It always makes me so happy to see little details like these on websites.',
            user: {
              image: '/users/image-victoria.jpg',
              name: 'Victoria Mejia',
              username: 'arlen_the_marlin'
            },
            replies: [
              {
                content: 'Me too! I\'d also love to see celebrations at specific points as well. It would help people take a moment to celebrate their achievements!',
                replyingTo: 'arlen_the_marlin',
                user: {
                  image: '/users/image-suzanne.jpg',
                  name: 'Suzanne Chang',
                  username: 'upbeat1811'
                }
              }
            ]
          }
        ]
      }
    ]

    return true
  }

  function getFeedback (id: Feedback['id']): Feedback | null {
    const index = getFeedbackIndex(id)

    if (index !== null) {
      return feedbacks.value[index]
    } else {
      return null
    }
  }

  function removeFeedback (id: Feedback['id']): boolean {
    const index = getFeedbackIndex(id)

    if (index !== null) {
      feedbacks.value.splice(index, 1)
      return true
    } else {
      return false
    }
  }

  function updateFeedback (id: Feedback['id'], data: Pick<Feedback, 'title' | 'category' | 'description'>): boolean {
    const index = getFeedbackIndex(id)

    if (index !== null) {
      Object.assign(feedbacks.value[index], data)
      return true
    } else {
      return false
    }
  }

  function getFeedbackIndex (id: Feedback['id']): number | null {
    const index = feedbacks.value.findIndex(item => item.id === id)
    return index !== -1 ? index : null
  }

  return {
    feedbacks,
    fetchFeedbacks,
    getFeedback,
    addFeedback,
    removeFeedback,
    updateFeedback
  }
})