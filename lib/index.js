'use strict';

module.exports = function ({ types }) {
  const transformedComments = new Set();

  let hitCount = 0;

  return {
    name: 'transform-log-comments',
    visitor: {
      'Statement|Declaration': function (path) {
        const {
          node: {
            leadingComments,
            trailingComments,
            //
          },
        } = path;

        if (leadingComments) {
          leadingComments.forEach(comment => tryTransformComment(comment, path, 'insertBefore'));
        }

        if (trailingComments) {
          trailingComments.forEach(comment => tryTransformComment(comment, path, 'insertAfter'));
        }
      },
    },
  };

  function tryTransformComment(comment, path, action) {
    const { type, value } = comment;

    const match = value.match(/^\s*>\s*(?<message>.*$)/);

    if (type !== 'CommentLine' || match === null) {
      return;
    }

    transformedComments.add(comment);
    if (transformedComments.size === hitCount) {
      return;
    }

    const {
      groups: { message },
    } = match;

    hitCount += 1;
    path[action](
      types.expressionStatement(
        //
        types.callExpression(
          //
          types.memberExpression(
            //
            types.identifier('console'),
            types.identifier('log'),
          ),
          [types.stringLiteral(message)],
        ),
      ),
    );
  }
};
